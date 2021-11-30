/*   import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'https://localhost:8380/auth',
                realm: 'Integration',
                clientId: 'front',
            },
            initOptions: {
                checkLoginIframe: true,
                 checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
}   */