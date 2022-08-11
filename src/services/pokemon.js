import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/pokemon",
  }),
  endpoints: (builder) => ({
    getPokemonName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetPokemonNameQuery } = pokeApi;
