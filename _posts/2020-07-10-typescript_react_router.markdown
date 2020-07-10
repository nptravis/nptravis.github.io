---
layout: post
title:      "Typescript and React Router"
date:       2020-07-10 11:54:00 -0100
permalink:  typescript_react_router
---

This can be a little tricky to get right. In order to access router objects, such as location and history, wrap your component with the react-router-dom HOC useRouter:

```js
import {withRouter} from 'react-router-dom';

export default withRouter(MyComponent);
```
This will map location, history, and match object from react-router-dom to your components props. Great, now to get the typescript stuff to work correctly, you can import the type information and extend your components props like so:

```js
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface IProps extends RouteComponentProps {
}

const MyComponent: React.FC<IProps> = props => {
	// all the code for this component
	props.history.push('/') //  this will now have all the type information attached
}
```

Alternatively, if you have some pure function that you pass your history object to, you can import the type information in the same way:

```js
import { RouteComponentProps } from 'react-router-dom';

export const removeAllURLSearchParams = (historyObj: RouteComponentProps['history']) => {
	historyObj.push({search: ''});
};
```


