import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
	const refEl = useRef(null);

	useEffect(() => {
		if (refEl) mount(refEl.current);
	}, [refEl]);

	return <div ref={refEl}></div>;
};
