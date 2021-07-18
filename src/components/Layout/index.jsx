import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import style from "./style";
import { format } from "date-fns";

const menuItems = [
  {
    text: "Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/home",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
];

export default function Layout({ children }) {
  // 留意 <Layout> 要在 <Router> 里面 ，否则这两个都拿不到
  const history = useHistory();
  const location = useLocation();
  const cls = style();

  return (
    <div className={cls.root}>
      {/* 头部 */}
      <AppBar position="fixed" className={cls.appBar} elevation={0} color="primary">
        <Toolbar>
          <Typography className={cls.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar className={cls.avatar} src="/mario-av.png" />
        </Toolbar>
      </AppBar>

      {/* 抽屉 */}
      <Drawer
        className={cls.drawer}
        variant="permanent"
        classes={{ paper: cls.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={cls.title}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? cls.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* 主体内容 */}
      <div className={cls.page}>
        <div className={cls.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
