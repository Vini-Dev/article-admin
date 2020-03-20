export const USER = '@espacotur-User';
export const TOKEN_KEY = '@espacotur-Token';
export const isAuthenticated = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

export const getToken = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

export const getUser = () =>
  JSON.parse(localStorage.getItem(USER) || sessionStorage.getItem(USER));

export const login = (data, rebember) => {
  if (rebember) {
    localStorage.setItem(USER, JSON.stringify(data.user));
    localStorage.setItem(TOKEN_KEY, data.authentication.token);
  } else {
    sessionStorage.setItem(USER, JSON.stringify(data.user));
    sessionStorage.setItem(TOKEN_KEY, data.authentication.token);
  }
};

export const logout = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN_KEY);
  } else {
    sessionStorage.removeItem(USER);
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('last_url');
  }
};
