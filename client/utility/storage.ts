export function setLocalStorage(token: any) {
  localStorage.removeItem('fire_token');
  localStorage.setItem('accessToken', JSON.stringify(token));
  console.log('accessToken: ', localStorage.getItem('accessToken'));
}

// export const getAccessToken = () => localStorage.getItem('accessToken');
