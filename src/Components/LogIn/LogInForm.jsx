import './LogInForm.css';

function Button() {
  const handleClick = () => {
    const phoneNumber = document.getElementById('phone').value;
    const formData = new FormData();
    formData.append('phone', phoneNumber);

    fetch('URL_YII', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Номер телефона успешно отправлен на сервер');
      } else {
        alert('Произошла ошибка при отправке номера телефона на сервер');
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
  };

  return (
    <div>
      <button className="custom-button" onClick={handleClick}>Отправить</button>
    </div>
  );
}

export default function LogInForm() {
  return (
    <div className="form-container">
      <label htmlFor="phone">Номер телефона:</label>
      <input type="tel" id="phone" name="phone" className="input-field" placeholder="Введите номер телефона" required />
      <Button />
    </div>
  );
}
