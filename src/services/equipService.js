const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/equips`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const show = async (equipId) => {
    try {
      const res = await fetch(`${BASE_URL}/${equipId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  

async function create(formData) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    return res.json(); 
  } catch (err) {
    console.log(err);
  }
}

async function update(formData, id) {
  // try {
  //   const res = await fetch(`${BASE_URL}/${id}`, {
  //     method: "PUT",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   });

  //   return res.json(); 
  // } catch (err) {
  //   console.log(err);
  // }
}

async function deleteSheet(id) {
  // try {
  //   const res = await fetch(`${BASE_URL}/${id}`, {
  //     method: "DELETE",
  //   });

  //   return res.json(); 
  // } catch (err) {
  //   console.log(err);
  // }
}

export {
  index,
  show,
  create,
  update,
  deleteSheet,
};