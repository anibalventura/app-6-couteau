import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { PropsWithChildren } from 'react';

interface PageProps extends PropsWithChildren<{}> {
  name: string;
}

function Page(props: PageProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{props.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{props.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {props.children}
      </IonContent>
    </IonPage>
  );
}

export default Page;
