import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

export default ({ onSignIn }) => {
	const refEl = useRef(null);
	const history = useHistory();

	useEffect(() => {
		if (refEl) {
			const { onParentNavigate } = mount(refEl.current, {
				initialPath: history.location.pathname,
				onNavigate: ({ pathname: nextPathname }) => {
					if (history.location !== nextPathname) {
						history.push(nextPathname);
					}
				},
				onSignIn,
			});

			history.listen(onParentNavigate);
		}
	}, [refEl]);

	return <div ref={refEl}></div>;
};
