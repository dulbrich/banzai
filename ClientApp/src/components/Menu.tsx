import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    isPlatform,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, businessOutline, businessSharp, cashOutline, cashSharp, desktopOutline, desktopSharp, heartOutline, heartSharp, helpCircleOutline, helpCircleSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, schoolOutline, schoolSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Teachers & Students',
        url: '/page/Inbox',
        iosIcon: schoolOutline,
        mdIcon: schoolSharp
    },
    {
        title: 'Banks & Credit Unions',
        url: '/page/Outbox',
        iosIcon: cashOutline,
        mdIcon: cashSharp
    },
    {
        title: 'Businesses & Benefits',
        url: '/page/Favorites',
        iosIcon: businessOutline,
        mdIcon: businessSharp
    },
    {
        title: 'Blog',
        url: '/page/Archived',
        iosIcon: desktopOutline,
        mdIcon: desktopSharp
    },
    {
        title: 'Help',
        url: '/page/Trash',
        iosIcon: helpCircleOutline,
        mdIcon: helpCircleSharp
    },

];

const Menu: React.FC = () => {
    const location = useLocation();
    const isDesktop = isPlatform("desktop");
    return (
        <IonMenu contentId="main" type="overlay" disabled={isDesktop}>
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Inbox</IonListHeader>
                    <IonNote>hi@ionicframework.com</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
                <IonList id="labels-list">
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
