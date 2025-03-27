import { IonButton, IonButtons, IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Lebogang Mokoena</IonTitle>
          <IonButtons slot='end'>
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonIcon slot='start'>
            <ion-icon src="./assets/person-circle-outline.jpg" name="person-circle-outline" role="img" class="md"></ion-icon>
          </IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lebogang Mokoena</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
          <IonFooter class='footer'>
            <IonToolbar>
            <IonTitle size="large">Assignment Day 1</IonTitle>
            </IonToolbar>
          </IonFooter>
        
    </IonPage>
  );
};

export default Home;
