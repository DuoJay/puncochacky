import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebase.config';

function Db() {
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    size: 1,
    type: 'socks',
    group: 1,
    images: {},
  });

  const { images } = formData;

  const onSubmit = async e => {
    e.preventDefault();

    const storeImage = async image => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, 'images/' + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          snapshot => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            toast.success('Nahráno ' + progress + 'procent');

            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                toast.success('Nahrává se');
                break;
              default:
                break;
            }
          },
          error => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...images].map(image => storeImage(image))
    ).catch(() => {
      toast.error('Ajaj, nenahrané obrázky. kontaktuj Jakuba!');
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
    };

    delete formDataCopy.images;

    // const docRef = await addDoc(collection(db, 'products'), formDataCopy);

    toast.success('🦄 Odesláno, vše je OK!', { theme: 'colored' });
  };

  const onMutate = e => {
    // Size to number
    if (e.target.id === 'size' || e.target.id === 'group') {
      setFormData(prevState => ({
        ...prevState,
        [e.target.id]: +e.target.value,
      }));
    }
    // Files
    if (e.target.files) {
      setFormData(prevState => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    // Text
    if (!e.target.files && e.target.id !== 'size' && e.target.id !== 'group') {
      setFormData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  return (
    <div className="db">
      <h2 className="h2 db__heading">Přidat položku</h2>
      <form action="" className="db__form" onSubmit={onSubmit}>
        <label htmlFor="name" className="db__form-label">
          Jméno:
        </label>
        <input
          id="name"
          className="db__form-input"
          onChange={onMutate}
          required
        ></input>

        <label htmlFor="color" className="db__form-label">
          Barva:
        </label>
        <input
          id="color"
          className="db__form-input"
          onChange={onMutate}
          required
        ></input>

        <label htmlFor="size" className="db__form-input">
          Velikost:
        </label>
        <select
          id="size"
          className="db__form-input"
          onChange={onMutate}
          required
        >
          <option value="1">15-17</option>
          <option value="2">18-19</option>
          <option value="3">35-37</option>
          <option value="4">38-43</option>
          <option value="5">50-56</option>
          <option value="6">62-68</option>
          <option value="7">68-74</option>
          <option value="8">74-80</option>
          <option value="9">80-86</option>
          <option value="10">86-91</option>
        </select>

        <label htmlFor="type" className="db__form-input">
          Typ:
        </label>
        <select
          id="type"
          className="db__form-input"
          onChange={onMutate}
          required
        >
          <option value="socks">Ponožky</option>
          <option value="stockings">Punčošky</option>
          <option value="adult">Pro dospělé</option>
        </select>

        <label htmlFor="group" className="db__form-input">
          Skupina:
        </label>
        <select
          id="group"
          className="db__form-input"
          onChange={onMutate}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
        </select>

        <label htmlFor="images" className="db__form-input">
          Fotky:
        </label>
        <input
          onChange={onMutate}
          id="images"
          type="file"
          max="6"
          accept=".jpg,.png,.jpeg"
          multiple
          required
        />
        <button type="submit" className="db__form-button">
          Odeslat
        </button>
      </form>
    </div>
  );
}

export default Db;
