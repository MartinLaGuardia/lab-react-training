import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard/IdCard';
import './IdCard/IdCard.css'
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';
import BoxColor from './Boxcolor/BoxColor';
import './CreditCard/CreditCard.css'
import CreditCard from './CreditCard/CreditCard';
import Rating from './Rating/Rating';
import './Rating/Rating.css'
import DriverCard from './DriverCard/Drivercard';
import './DriverCard/DriverCard.css'
import LikeButton from './LikeButton/LikeButton';
import ClickablePicture from './ClickablePicture/ClickablePicture';



function App() {

  return (

    <div className='App'>


      <div className="IdCard">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>



      <div className='greetings'>
        <Greetings lang="de"> Ludwing </Greetings>
        <Greetings lang="fr"> michel </Greetings>
        <Greetings lang="en"> mike </Greetings>
        <Greetings lang="es"> pepe </Greetings>

      </div>

      <div className='Random'>

        <Random min={1} max={6} />
        <Random min={3} max={90} />

      </div>

      <div className='BoxColor'>

        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="128" g="255" b="0" />

      </div>

      <div className='creditCard'>

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />

      </div>

      <div className='valuestars'>

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

      </div>

      <div className='license'>

        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />

      </div>

      <div>
        <LikeButton />

      </div>

      <ClickablePicture
        img='./images/maxence.png'
        imgClicked='./images/maxence-glasses.png'
      />

    </div>





  )
};
export default App;
