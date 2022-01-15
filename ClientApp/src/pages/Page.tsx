import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { arrowForwardOutline, happyOutline } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const isDesktop = isPlatform('desktop');
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar color="banzai">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <img src="/assets/images/banzai.png" alt="Banzai! logo" style={{ filter: "grayscale(100%) brightness(600%)", mixBlendMode: "multiply" }} />
                    </IonTitle>
                    <IonButtons slot="end" className="ion-padding">
                        {isDesktop && (
                            <>
                                <IonButton mode="ios">Teachers & Students</IonButton>
                                <IonButton mode="ios">Banks & Credit Unions</IonButton>
                                <IonButton mode="ios">Businesses & Benefits</IonButton>
                                <IonButton mode="ios">Blog</IonButton>
                                <IonButton mode="ios">Help</IonButton>
                            </>
                        )}
                        <IonButton mode="ios" fill="solid" color="secondary" shape="round" style={{ width: "80px" }}>Login</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {/*TOP BOX*/}
                <div style={{ width: "100%", backgroundColor: "var(--ion-color-banzai)", paddingLeft: isDesktop ? "80px" : "0px", paddingTop: isDesktop ? "60px" : ""}}>
                    <IonGrid className="ion-no-padding">
                        <IonRow className="ion-no-padding">
                            {/*WORDS COLUMN*/}
                            <IonCol size="12" size-lg="7">
                                <IonList className="ion-no-padding">
                                    <IonItem color="banzai" lines="none">
                                        <IonLabel
                                            color="light"
                                            className="ion-text-wrap large-text-font"
                                            style={{ fontSize: "65px", lineHeight: "1em" }}
                                        >
                                            An employee benefit with immediate benefits, every day.
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem color="banzai" lines="none">
                                        <IonLabel
                                            color="light"
                                            className="ion-text-wrap  small-text-font"
                                            style={{ fontSize: "25px", lineHeight: "1.5em" }}
                                        >
                                            Your <strong>employees</strong> deserve to be financially sound. Banzai can get them there with <strong>interactive courses</strong>,&nbsp;
                                                <strong>articles</strong>. & <strong>virtual coaches</strong>. Employees will learn how to <strong>manage their money</strong> & will feel <strong>empowered</strong>.
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                                <div className="ion-padding" style={{paddingTop: "70px", paddingBottom: "70px"}}>
                                    <IonButton color="secondary" size="large">
                                        <IonLabel className="bold-text">Schedule A Demo <IonIcon icon={arrowForwardOutline} /></IonLabel>
                                    </IonButton>
                                    <br />
                                    <IonLabel color="medium" style={{ fontWeight: "600" }}>
                                        Already have an account? <strong>Log in</strong>.
                                    </IonLabel>
                                </div>
                            </IonCol>
                            {/*IMAGE COLUMN*/}
                            <IonCol size="12" size-lg="5">
                                <img src="/assets/images/ipad2.png" style={{ width: "100%" }} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                {/*BOTTOM BOX*/}
                <div style={{ width: "100%", paddingLeft: isDesktop ? "80px" : "", paddingTop: "70px", paddingRight: "80px" }}>
                    <IonGrid>
                        {/*BENEFITS OF BONZAI ROW*/}
                        <IonRow>
                            <IonCol size="4" />
                            <IonCol size="4">
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ borderStyle: "solid", borderWidth: "4px", padding: "10px", width: "250px", display: "table", margin: "0 auto" }}>
                                        <IonLabel className="bold-text"><strong>BENEFITS OF BONZAI</strong></IonLabel>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size="4" />
                        </IonRow>
                        {/*FOUR REASONS ROW*/}
                        <IonRow>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">EMPLOYEE SATISFACTION</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{fontWeight: "600"}} color="medium">Lorem <a color="secondary">ipsum dolor</a> sit amet, consectetur adipiscing elit.</IonText></IonRow>
                            </IonCol>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">2 MILLION USERS</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{ fontWeight: "600" }} color="medium">Lorem <a color="secondary">ipsum dolor</a> sit amet, consectetur adipiscing elit. Vivamus tincidunt erat non sollicitudin <a color="secondary">ultricies.</a></IonText></IonRow>
                            </IonCol>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">100+ RESOURCES</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{ fontWeight: "600" }} color="medium">Lorem <a color="secondary">ipsum dolor</a>. Nulla non urna sed velit feugiat ornare. Maecenas auctor posuere <a color="secondary">ullamcorper</a>. </IonText></IonRow>
                            </IonCol>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">EARN REWARDS</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{ fontWeight: "600" }} color="medium">Lorem <a color="secondary">ipsum dolor</a> sit amet.</IonText></IonRow>
                            </IonCol>
                        </IonRow>
                        {/*WHY FINANCIAL LITERACY ROW*/}
                        <IonRow style={{paddingTop: "80px"}} className="ion-padding">
                            <IonLabel className="large-text-font" style={{fontSize: "42px", fontWeight: "500"}}>Why financial literacy? Talk about producivity, health, well-being, empowerment, enjoyment, attendance, real-life application etc.</IonLabel>
                        </IonRow>
                        <IonRow>&nbsp;</IonRow>
                        <IonRow>
                            <IonButton color="secondary" size="large">
                                <IonLabel className="bold-text">Get Started <IonIcon icon={arrowForwardOutline} /></IonLabel>
                            </IonButton>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Page;