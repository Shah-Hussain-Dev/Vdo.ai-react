import React, { useEffect, useMemo, useState } from "react";
const VdoAi = () => {
  const [url, setUrl] = useState(
    "//a.vdo.ai/core/v-nationaldaycalendar/vdo.ai.js?vdo="
  );
    const memo = useMemo(() => {
      runScript();
    }, [url]);
    function runScript() {
      (function (v, d, o, ai) {
        ai = d.createElement("script");
        ai.defer = true;
        ai.async = true;
        ai.src = v.location.protocol + o;
        d.head.appendChild(ai);
      })(window, document, url + Math.random());
      console.log("running");
    return <div id="v-nationaldaycalendar"></div>;
  };
};
export default VdoAi;
