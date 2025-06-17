import './App.css'


function App() {
  return (

    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <header class="container">
        <img src="./Logo.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <button class="btn">Register Now <i class="fa-solid fa-right-long"></i></button>
          </ul>
        </nav>
        <button class="menu-btn"><i class="fa-solid fa-bars"></i></button>
      </header>
      <section className='texts container'>
        <div className="text">
          <h1>Lessons and insights <br /> <span className='yashil'>from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button className='btn'>Register</button>
        </div>
        <img src="./Img.png" alt="ds" />
      </section>
      <div className="our">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <img className='ims' src="./Icons.png" alt="" />
      </div>
      <h1 className='hh'>Manage your entire community <br /> in a single system</h1>
      <section className='cards container'>

        <div className="card">
          <img src="./Cons.png" alt="ew" />
          <h2>Membership <br /> Organisations</h2>
          <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
        <div className="card">
          <img src="./Cons.png" alt="ew" />
          <h2>Membership <br /> Organisations</h2>
          <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
        <div className="card">
          <img src="./Cons.png" alt="ew" />
          <h2>Membership <br /> Organisations</h2>
          <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>

      </section>
      <section className='texts container'>
        <img src="./Fram.png" alt="" />
        <div className="text">
          <h1>The unseen of spending three <br /> years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className='btn'>Learn More</button>
        </div>
      </section>








    </div>
  )
}

export default App
