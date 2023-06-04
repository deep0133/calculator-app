// Theme Styling:
const togBtnHandler = () => {
  const togBtn = document.getElementById("tog-btn");

  if (togBtn.classList.contains("tog-btn-translate-23")) {
    togBtn.classList.remove("tog-btn-translate-23");
    togBtn.classList.add("tog-btn-translate-45");
    changeTheme(theme3, 3);
  } else if (togBtn.classList.contains("tog-btn-translate-45")) {
    togBtn.classList.remove("tog-btn-translate-45");
    changeTheme(theme1, 1);
  } else {
    togBtn.classList.add("tog-btn-translate-23");
    changeTheme(theme2, 2);
  }
};

const theme1 = {
  theme_1_background: `hsl(222, 26%, 31%)`,
  theme_1_background_tog_keyPad: `hsl(223, 31%, 20%)`,
  theme_1_background_screen: `hsl(224, 36%, 15%)`,
  theme_1_keys_background_hov: `hsl(0, 24%, 93%)`,
  theme_1_keys_background_del_rst: `hsl(225, 21%, 49%)`,
  theme_1_keys_background_del_rst_hov: `hsl(224, 27%, 64%)`,
  theme_1_keys_shadow_del_rst: `hsl(224, 28%, 35%)`,
  theme_1_keys_background_eql_tog: `hsl(6, 63%, 50%)`,
  theme_1_keys_background_eql_hov: `hsl(6.46deg 92.94% 66.67%)`,
  theme_1_keys_eql_shadow: `hsl(6, 70%, 34%)`,
  theme_1_keys_num_background: `hsl(30, 25%, 89%)`,
  theme_1_keys_num_shadow: `hsl(28, 16%, 65%)`,
  theme_1_text_num: `hsl(221, 14%, 31%)`,
  theme_1_text_num_eql: `hsl(0, 0%, 100%)`,
  theme_1_text_del_rst: `hsl(0, 0%, 100%)`,
  theme_1_text_ans: `hsl(0, 0%, 100%)`,
};
const theme2 = {
  // /* Background colors */
  theme_2_background: `hsl(0, 0%, 90%)`,
  theme_2_background_tog_keyPad: `hsl(0, 5%, 81%)`,
  theme_2_background_screen: `hsl(0, 0%, 93%)`,
  theme_2_keys_background_hov: `hsl(0 0% 100%)`,
  theme_2_keys_background_del_rst: `hsl(185, 42%, 37%)`,
  theme_2_keys_background_del_rst_hov: `hsl(186.21deg 39.37% 56.67%)`,
  theme_2_keys_shadow_del_rst: `hsl(185, 58%, 25%)`,
  theme_2_keys_background_eql_tog: `hsl(25, 98%, 40%)`,
  theme_2_keys_background_eql_hov: `hsl(25.03deg 100% 60.98%)`,
  theme_2_keys_eql_shadow: `hsl(25, 99%, 27%)`,
  theme_2_keys_num_background: `hsl(48deg 8.77% 88.82%)`,
  theme_2_keys_num_shadow: `hsl(35, 11%, 61%)`,
  theme_2_text_num: `hsl(60, 10%, 19%)`,
  theme_2_text_num_eql: `hsl(0, 0%, 100%)`,
  theme_2_text_del_rst: `hsl(0, 0%, 100%)`,
  theme_2_text_ans: `hsl(0, 0%, 0%)`,
};
const theme3 = {
  theme_3_background: `hsl(268, 75%, 9%)`,
  theme_3_background_tog_keyPad: `hsl(268, 71%, 12%)`,
  theme_3_background_screen: `hsl(268, 71%, 12%)`,
  theme_3_keys_background_hov: `hsl(281, 46%, 45%)`,
  theme_3_keys_background_del_rst: `hsl(281, 89%, 26%)`,
  theme_3_keys_background_del_rst_hov: `hsl(267.5deg 53.57% 43.92%)`,
  theme_3_keys_shadow_del_rst: `hsl(285, 91%, 52%)`,
  theme_3_keys_background_eql_tog: `hsl(176, 100%, 44%)`,
  theme_3_keys_background_eql_hov: `hsl(176.64deg 100% 79.02%)`,
  theme_3_keys_eql_shadow: `hsl(177, 92%, 70%)`,
  theme_3_keys_num_background: `hsl(268, 47%, 21%)`,
  theme_3_keys_num_shadow: `hsl(290, 70%, 36%)`,
  theme_3_text_num: `hsl(52, 100%, 62%)`,
  theme_3_text_num_eql: `hsl(194deg 51.72% 11.37%)`,
  theme_3_text_del_rst: `hsl(0, 0%, 100%)`,
  theme_3_text_ans: `hsl(52, 100%, 62%)`,
};

// Change the CSS root variables
const changeTheme = (themeObj, val) => {
  document.documentElement.style.setProperty(
    "--theme_background",
    themeObj[`theme_${val}_background`]
  );
  document.documentElement.style.setProperty(
    "--theme_background_tog_keyPad",
    themeObj[`theme_${val}_background_tog_keyPad`]
  );
  document.documentElement.style.setProperty(
    "--theme_background_screen",
    themeObj[`theme_${val}_background_screen`]
  );

  document.documentElement.style.setProperty(
    "--theme_keys_background_hov",
    themeObj[`theme_${val}_keys_background_hov`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_background_del_rst",
    themeObj[`theme_${val}_keys_background_del_rst`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_background_del_rst_hov",
    themeObj[`theme_${val}_keys_background_del_rst_hov`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_shadow_del_rst",
    themeObj[`theme_${val}_keys_shadow_del_rst`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_background_eql_tog",
    themeObj[`theme_${val}_keys_background_eql_tog`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_background_eql_hov",
    themeObj[`theme_${val}_keys_background_eql_hov`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_eql_shadow",
    themeObj[`theme_${val}_keys_eql_shadow`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_num_background",
    themeObj[`theme_${val}_keys_num_background`]
  );
  document.documentElement.style.setProperty(
    "--theme_keys_num_shadow",
    themeObj[`theme_${val}_keys_num_shadow`]
  );
  document.documentElement.style.setProperty(
    "--theme_text_num",
    themeObj[`theme_${val}_text_num`]
  );
  document.documentElement.style.setProperty(
    "--theme_text_del_rst",
    themeObj[`theme_${val}_text_del_rst`]
  );
  document.documentElement.style.setProperty(
    "--theme_text_num_eql",
    themeObj[`theme_${val}_text_num_eql`]
  );
  document.documentElement.style.setProperty(
    "--theme_text_ans",
    themeObj[`theme_${val}_text_ans`]
  );
};

// Calculator logic:

const outputTag = document.getElementById("output");

const onkeyPress = (val) => {
  outputTag.value += val;
  outputTag.scrollLeft = outputTag.scrollWidth;
};

const delLastKey = () => {
  if (outputTag.value === "Invalid Expression") {
    outputTag.value = "";
  } else {
    const newExp = outputTag.value.slice(0, -1);
    outputTag.value = newExp;
  }
};

const operator = (oprtor) => {
  outputTag.value += oprtor;
};

const calculateResult = () => {
  try {
    const exp = outputTag.value;
    outputTag.value = eval(exp);
  } catch (e) {
    outputTag.value = "Invalid Expression";
  }
};

const reset = () => {
  outputTag.value = "";
};
