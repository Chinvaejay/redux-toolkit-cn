module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      // collapsed: false,
      items: ['introduction/getting-started'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      // collapsed: false,
      items: [
        'tutorials/tutorials-overview',
        'tutorials/quick-start',
        'tutorials/typescript',
      ],
    },
    {
      type: 'category',
      label: 'Using Redux Toolkit',
      // collapsed: false,
      items: ['usage/usage-guide', 'usage/usage-with-typescript'],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'category',
          label: 'Store Setup',
          // collapsed: false,
          items: [
            'api/configureStore',
            'api/getDefaultMiddleware',
            'api/immutabilityMiddleware',
            'api/serializabilityMiddleware',
          ],
        },
        {
          type: 'category',
          label: 'Reducers and Actions',
          // collapsed: false,
          items: [
            'api/createReducer',
            'api/createAction',
            'api/createSlice',
            'api/createAsyncThunk',
            'api/createEntityAdapter',
          ],
        },
        {
          type: 'category',
          label: 'Other',
          // collapsed: false,
          items: [
            'api/createSelector',
            'api/matching-utilities',
            'api/other-exports',
          ],
        },
      ],
    },
  ],
};
