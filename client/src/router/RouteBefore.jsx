/**
 * 模拟导航守卫
 */
import RouteBeforeConfig from "./RouteBeforeConfig";
import RouteConfig from "./index";
import {Button, Result} from "antd";

function RouteBefore() {
    const _403 =
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Result
                status="403"
                title="403"
                subTitle="抱歉，您无权访问此页面。请先登录"
                extra={
                    <Button
                        type="primary"
                        onClick={() => window.location.pathname = "/"}
                    >回到首页</Button>
                }
            />
        </div>;

    const _404 =
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Result
                status="404"
                title="404"
                subTitle="抱歉，您访问的页面不存在。"
                extra={
                    <Button
                        type="primary"
                        onClick={() => window.location.pathname = "/"}
                    >回到首页</Button>
                }
            />
        </div>;


    const currentRoutes = RouteBeforeConfig.filter(route => route.path === window.location.pathname);
    // 如果路由不存在，应该返回404页面
    if (currentRoutes.length === 0) {
        return _404;
    }

    const currentRoute = currentRoutes[0];
    // 路由需要登录，但是没有登录的话，无权限访问，返回403页面
    if (currentRoute.needLogin && !localStorage.getItem('userToken') && !sessionStorage.getItem('userToken')) {
        return _403;
    }

    return <RouteConfig/>;
}

export default RouteBefore;