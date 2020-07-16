import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiChevronRight } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container, Content, CharacterInfo } from './styles';

import api, { params } from '../../services/api';

interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  url: string;
}

interface FormProps {
  character: string;
}

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Characters[]>(() => {
    const storagedCharacters = localStorage.getItem('@marvelApi');

    if (storagedCharacters) {
      return JSON.parse(storagedCharacters);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@marvelApi', JSON.stringify(characters));
  }, [characters]);

  const handleSubmit = useCallback(
    async (data: FormProps, { reset }) => {
      const response = await api.get(`characters?name=${data.character}`, {
        params,
      });

      const { results } = response.data.data;

      const urlFormatted = results[0].name.replace(' ', '-');

      const character = {
        id: results[0].id,
        name: results[0].name,
        description: results[0].description,
        thumbnail: results[0].thumbnail,
        url: urlFormatted.toLowerCase(),
      };

      setCharacters([...characters, character]);

      reset();
    },
    [characters],
  );

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="character" placeholder="Digite o nome do personagem" />
          <button type="submit">Pesquisar</button>
        </Form>
      </Content>
      <CharacterInfo>
        {characters &&
          characters.map(character => (
            <Link key={character.id} to={`/character/${character.url}`}>
              <img
                src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
                alt={`Thumnail ${character.name}`}
              />
              <div>
                <strong>{character.name}</strong>
                <p>{character.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
      </CharacterInfo>
    </Container>
  );
};

export default Home;
