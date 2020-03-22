export const TOKEN_KEY = '@article-Token';

export const isAuthenticated = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

export const getToken = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

export const login = (data, rebember) => {
  if (rebember) {
    localStorage.setItem(TOKEN_KEY, data.token);
  } else {
    sessionStorage.setItem(TOKEN_KEY, data.token);
  }
};

export const logout = () => {
  if (!localStorage.getItem(TOKEN_KEY) && sessionStorage.getItem(TOKEN_KEY)) {
    localStorage.removeItem('last_url');
  }

  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
};
