/*
 * @Author: ywl
 * @LastEditors: ywl
 */
import {
    makeStyles
} from "@material-ui/core";
const drawerWidth = 240;

// theme 能够拿到 mui 主题
export default makeStyles((theme) => {
    console.log(theme, "=========theme");
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        date: {
            flexGrow: 1
        },
        toolbar: theme.mixins.toolbar,
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
});