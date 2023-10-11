import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

export default () => {
	const refEl = useRef(null);
	const history = useHistory();

	useEffect(() => {
		if (refEl) {
			const { onParentNavigate } = mount(refEl.current, {
				onNavigate: ({ pathname: nextPathname }) => {
					if (history.location !== nextPathname) {
						history.push(nextPathname);
					}
				},
			});

			history.listen(onParentNavigate);
		}
	}, [refEl]);

	return <div ref={refEl}></div>;
};
