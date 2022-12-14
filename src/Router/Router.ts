import { capitalizeFirstLetter } from '@utils'
import { Route } from '@interfaces'
export class Router {
    private routes: any

    public constructor(routes: any) {
        this.routes = routes
    }

    public getRoutes(): Array<Route> {
        return this.routes.map((route) => {
            return {
                name: this.sanetizeName(route.url),
                slug: route.url,
                current: true,
            }
        })
    }

    private sanetizeName(str: string): string {
        return capitalizeFirstLetter(str.split('/')[1] || '')
    }
}
