export const SET_ACTIVE_PAGE_ROUTE = 'SET_ACTIVE_PAGE_ROUTE';
export const setActivePageRoute = (activePageRoute) => {
    return {
        type: SET_ACTIVE_PAGE_ROUTE,
        activePageRoute
    }
}

export const SET_IS_PAGE_RENDERED_ON_SERVER = 'SET_IS_PAGE_RENDERED_ON_SERVER';
export const setIsPageRenderedOnServer = (isPageRenderedOnServer) => {
    return {
        type: SET_IS_PAGE_RENDERED_ON_SERVER,
        isPageRenderedOnServer
    }
}