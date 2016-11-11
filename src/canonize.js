export default function canonize(inStr) {
  try {
    //const re = new RegExp('@?(https?:)?(\/\/)?((xxx.domain|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)','i');
    const re = new RegExp('^(.*:)?(\/\/)?([A-Za-z0-9\-\.]+\/)?(:[0-9]+)?(@|\/)?([a-zA-Z0-9\.\_]*)', 'i');// for
    const username = inStr.match(re)[6];
    //console.log(username);
    if (username === '') {
      return 'Invalid username';
    } else {
      return '@' + username;
    }

  } catch (err) {
    return 'Invalid username: ' + err;
  }
}
