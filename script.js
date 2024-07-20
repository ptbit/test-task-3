function getParamsFromUrl(url) {
  const ans = {};

  const paramsStr = url.split('?')[1].split('&');

  paramsStr.forEach((el) => {
    const key = el.split('=')[0];
    const value = el.split('=')[1];
    
    ans[key] = value;
  });

  return ans;
}