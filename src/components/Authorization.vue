<script>
</script>

<template>
  <section class="auth">
    <div class="auth__container">
      <div class="auth__content">
        <h1 class="sign">Sign In Form</h1>
        <div id="wrapper">
          <form id="signin" method="post" action="" autocomplete="off">
            <input
              type="text"
              id="user"
              name="user"
              placeholder="логин"
              required
            />
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="пароль"
              required
            />
            <button type="submit" class="submit-btn">
              <i class="fa fa-arrow-circle-right"></i>
            </button>
            <p>
              not yet registered
              <Router-link to="/registration">register here</Router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");


.auth__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

}
.auth__content{
  background-color: #fff;
  padding: 40px;
  border-radius: 40px;
}
.sign {
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

#wrapper {
  position: relative;
  width: 320px;
  margin: 0 auto;
}

#signin {
  background: #839dc4;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#signin input[type="text"],
#signin input[type="password"] {
  background: #b9cdea;
  border: 2px solid #34383d;
  border-radius: 4px;
  height: 45px;
  padding: 0 15px;
  color: #fff;
  font-size: 16px;
}

#signin input:focus {
  border-color: #007ea5;
  outline: none;
}

#signin button.submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: #b9cdea;
  border-radius: 50%;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: auto;
}

#signin button.submit-btn:hover {
  background: #007ea5;
  color: #fff;
  box-shadow: 0 0 10px #007ea5;
}

#signin button[type="submit"] {
  display: flex;
  justify-content: center;
  background: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
  color: #b9cdea;
}

#signin p {
  color: rgb(79, 85, 97);
  padding: 0 20px;
  font-weight: 700;
  font-size: 12px;
  margin: 5px 0 0 0;
}
#signin p > a {
  color: rgb(111, 119, 135);
  text-decoration: none;
}
#signin p > a:hover {
  border-bottom: 1px solid;
}
</style>
