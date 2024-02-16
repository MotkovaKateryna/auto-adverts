export const getAllAdverts = store => store.adverts.items;

export const getFilteredAdverts = ({ adverts, filter } ) => {
    if (!filter) {
      return adverts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    return adverts.items.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
}

export const getIsLoading = state => state.adverts.isLoading;

export const getError = state => state.adverts.error;