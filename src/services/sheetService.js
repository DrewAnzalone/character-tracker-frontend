const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

async function create(formData) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(formData),
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

const show = async (sheetId) => {
  try {
    const res = await fetch(`${BASE_URL}/${sheetId}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function update(formData, id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(formData),
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

async function deleteSheet(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      method: "DELETE",
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export {
  index,
  create,
  show,
  update,
  deleteSheet,
};
