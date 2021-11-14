function getAkanName() {
  const maleAkanNames = [
    'Kwasi',
    'Kwadwo',
    'Kwabena',
    'Kwaku',
    'Yaw',
    'Kofi',
    'Kwame',
  ];

  const femaleAkanNames = [
    'Akosua',
    'Adwoa',
    'Abenaa',
    'Akua',
    'Yaa',
    'Afua',
    'Ama',
  ];

  const gender = document.getElementById('gender').value;

  let birthdayDate = document.getElementById('birthday').value;

  birthdayDate = new Date(birthdayDate);

  const dd = birthdayDate.getDate();
  const mm = birthdayDate.getMonth();
  const year = birthdayDate.getFullYear().toString();

  const cc = year.slice(0, 2);
  const yy = year.slice(2, 4);

  let dayofTheWeek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  dayofTheWeek = parseInt(dayofTheWeek);

  console.log(dayofTheWeek);

  let akanName = '';

  if (gender === 'male') {
    akanName = maleAkanNames[dayofTheWeek]; // maleAkanName[0]
  } else if (gender === 'Female') {
    akanName = femaleAkanNames[dayofTheWeek];
  }

  document.getElementById('akanName').innerHTML = akanName;
}
