import { useState, useEffect } from 'react';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button/';
import Title from '@/components/UI/Title';
import useFetch from '@/hooks/useFetch';

const Index = () => {
  //on initialise le state userForm avec les champs email et password
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  });

  const { fetchData, data, loading, error } = useFetch({
    url: '/auth/login',
    body: userForm,
    method: 'POST',
  });

  //on affiche les données saisies dans la console
  useEffect(() => {
    console.log(userForm);
  }, [userForm]);

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      //on récupère le nom de l'input et on lui affecte la valeur saisie
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    //toujours mettre e.preventDefault() pour éviter le rechargement de la page
    e.preventDefault();
    fetchData();
    // //on envoie les données au serveur
    // fetch('http://localhost:3030/api/v1/auth/login', {
    //   body: JSON.stringify(userForm),
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/json',
    //   },
    // })
    //   //on récupère la réponse du serveur
    //   .then((res) => res.json())
    //   //on affiche la réponse du serveur
    //   .then((data) => console.log(data))
    //   //on affiche l'erreur
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <Title title="Login" Level="h1" />
      {/* on appelle la fonction submitLogin au moment de la soumission du formulaire */}
      <form onSubmit={(e) => submitLogin(e)}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="veuillez saisir votre email"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="veuillez saisir votre mot de passe"
          required={true}
          onChange={(e) => handleChange(e)}
          value={userForm.password}
        />
        <Button type="submit" title="Se connecter" className="btn__secondary" />
      </form>
    </>
  );
};

export default Index;
