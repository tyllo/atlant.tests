/* eslint no-shadow: 0 */

const namespaced = true;

const TYPES = {
  REMOVE: 'REMOVE_ITEM',
};

const createState = () => ({
  list: [
    'Тестовый коммент',
    'Это шедевр',
    'Тестовый коммент 2',
    'Это прекрасно',
    'Лучшее, что я видел',
    'Тестовый коммент 3',
    'Два чая этому автору',
    'Тестовый коммент 4',
  ].map((value, i) => ({ id: i, value })),
});

const createActions = api => ({
  async remove({ commit }, id) {
    const promise = new Promise((resolve, reject) => {
      api.remove({ data: id, resolve, reject });
    });

    try {
      await promise;
      commit(TYPES.REMOVE, id);
    } catch (e) {
      console.error(e);
    }
  },
});

const createMutations = () => ({
  [TYPES.REMOVE](state, id) {
    const index = state.list.findIndex(_ => _.id === id);

    if (index !== -1) {
      state.list.splice(index, 1);
    }
  },
});

export default api => ({
  namespaced,
  state: createState(),
  actions: createActions(api),
  mutations: createMutations(),
});
