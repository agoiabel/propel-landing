/* @ds-bundle: {"format":4,"namespace":"NexuraDesignSystem_19251d","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"FrameLines","sourcePath":"components/core/FrameLines.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"BlogCard","sourcePath":"components/marketing/BlogCard.jsx"},{"name":"FaqItem","sourcePath":"components/marketing/FaqItem.jsx"},{"name":"FeatureTab","sourcePath":"components/marketing/FeatureTab.jsx"},{"name":"IntegrationCard","sourcePath":"components/marketing/IntegrationCard.jsx"},{"name":"LogoStrip","sourcePath":"components/marketing/LogoStrip.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"SectionHeader","sourcePath":"components/marketing/SectionHeader.jsx"},{"name":"StepItem","sourcePath":"components/marketing/StepItem.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"FilterTabs","sourcePath":"components/navigation/FilterTabs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"SegmentedToggle","sourcePath":"components/navigation/SegmentedToggle.jsx"},{"name":"ChatMessage","sourcePath":"components/product/ChatMessage.jsx"},{"name":"CursorChip","sourcePath":"components/product/CursorChip.jsx"},{"name":"FlowCard","sourcePath":"components/product/FlowCard.jsx"},{"name":"MetricStat","sourcePath":"components/product/MetricStat.jsx"},{"name":"NotificationBanner","sourcePath":"components/product/NotificationBanner.jsx"},{"name":"PromptBox","sourcePath":"components/product/PromptBox.jsx"}],"sourceHashes":{"components/core/Button.jsx":"362e2da613b4","components/core/Divider.jsx":"bd1159e0c1e7","components/core/FrameLines.jsx":"b65eb1073760","components/core/Icon.jsx":"0d9a51892538","components/core/Logo.jsx":"1372efb2b391","components/core/Pill.jsx":"b4360a024b56","components/core/Tag.jsx":"ed30f8407bcb","components/forms/SelectField.jsx":"a763a83a829d","components/forms/TextField.jsx":"048db03ce9c3","components/marketing/BlogCard.jsx":"299472e6aeb5","components/marketing/FaqItem.jsx":"a73523958096","components/marketing/FeatureTab.jsx":"fc543ba891e1","components/marketing/IntegrationCard.jsx":"1c9800199650","components/marketing/LogoStrip.jsx":"bba33afcf131","components/marketing/PricingCard.jsx":"5a946e76e116","components/marketing/SectionHeader.jsx":"30dbb890f505","components/marketing/StepItem.jsx":"8f7e1afe27ed","components/marketing/TestimonialCard.jsx":"c4774827fcc9","components/navigation/FilterTabs.jsx":"ce00a6a7e3f9","components/navigation/Footer.jsx":"6deb8f254abe","components/navigation/NavLink.jsx":"81306aa63e0e","components/navigation/Navbar.jsx":"9e9f06b0cb6c","components/navigation/SegmentedToggle.jsx":"0aa3f82248e9","components/product/ChatMessage.jsx":"435b63c0c202","components/product/CursorChip.jsx":"d75ef47c6467","components/product/FlowCard.jsx":"2b050af3d793","components/product/MetricStat.jsx":"ba83216e1778","components/product/NotificationBanner.jsx":"6c3ab5c3fa1e","components/product/PromptBox.jsx":"a853ece667e7","ui_kits/website/Home.jsx":"8bd6c6cc98eb","ui_kits/website/Pages.jsx":"bf325ef77004","ui_kits/website/Shared.jsx":"f424af22fd8b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NexuraDesignSystem_19251d = window.NexuraDesignSystem_19251d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
// Pill button from the Nexura site. Two variants: filled (black) and outline (white w/ grey hairline).
// Hover: a #f4f4f4 glow ring fades in 4px outside the pill and the label rolls up (two stacked copies).
function Button({
  children,
  variant = 'filled',
  href,
  onClick,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const filled = variant === 'filled';
  const Tag = href ? 'a' : 'button';
  const label = {
    display: 'block',
    font: '500 16px/1.3 var(--font-sans)',
    letterSpacing: '-0.03em',
    whiteSpace: 'nowrap',
    color: filled ? 'var(--text-inverse)' : 'var(--text-primary)'
  };
  const roll = {
    transition: 'transform 400ms var(--ease-out)',
    transform: hover && !disabled ? 'translateY(-100%)' : 'translateY(0)'
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    disabled: href ? undefined : disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      position: 'relative',
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 16px',
      border: 0,
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      opacity: disabled ? 0.5 : 1,
      borderRadius: 100,
      font: 'inherit'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: 64,
      background: 'var(--grey-100)',
      opacity: hover && !disabled ? 1 : 0,
      transition: 'opacity 300ms var(--ease-standard)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 100,
      zIndex: 1,
      background: filled ? 'var(--black)' : 'var(--white)',
      border: '1px solid ' + (filled ? 'var(--border-button-dark)' : 'var(--border-subtle)'),
      boxShadow: filled ? 'var(--shadow-button)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'block',
      overflow: 'hidden',
      height: '1.3em',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'block'
    }, roll)
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, children), /*#__PURE__*/React.createElement("span", {
    style: label,
    "aria-hidden": "true"
  }, children))));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
// Hairline divider. "dots" adds the 10px square end-caps of the site's blueprint frame.
function Divider({
  variant = 'dashed',
  dots = false,
  color,
  style
}) {
  const c = color || (variant === 'dashed' ? 'var(--border-subtle)' : 'var(--border-frame)');
  const dot = {
    width: 10,
    height: 10,
    flex: 'none',
    background: 'var(--white)',
    border: '1px solid var(--border-frame)'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: Object.assign({
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }, style)
  }, dots ? /*#__PURE__*/React.createElement("span", {
    style: dot
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 0,
      borderTop: '1px ' + (variant === 'dashed' ? 'dashed' : 'solid') + ' ' + c
    }
  }), dots ? /*#__PURE__*/React.createElement("span", {
    style: dot
  }) : null);
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/FrameLines.jsx
try { (() => {
// The site's signature "blueprint" frame: 1px #dadada vertical rails at the container edges,
// optional horizontal rails, and 10px white squares where they intersect. Place inside a position:relative container.
function FrameLines({
  top = true,
  bottom = false,
  inset = 0,
  color = 'var(--border-frame)',
  style
}) {
  const sq = {
    position: 'absolute',
    width: 10,
    height: 10,
    background: 'var(--white)',
    border: '1px solid ' + color,
    zIndex: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: Object.assign({
      position: 'absolute',
      inset: inset,
      pointerEvents: 'none'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      borderLeft: '1px solid ' + color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      borderLeft: '1px solid ' + color
    }
  }), top ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      borderTop: '1px solid ' + color
    }
  }) : null, bottom ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderTop: '1px solid ' + color
    }
  }) : null, top ? /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      top: -5,
      left: -5
    }, sq)
  }) : null, top ? /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      top: -5,
      right: -5
    }, sq)
  }) : null, bottom ? /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      bottom: -5,
      left: -5
    }, sq)
  }) : null, bottom ? /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      bottom: -5,
      right: -5
    }, sq)
  }) : null);
}
Object.assign(__ds_scope, { FrameLines });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FrameLines.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Icon paths copied verbatim from the Nexura Framer export (Phosphor-style, 1.5px stroke, 24px grid).
const NX_ICON_PATHS = {
  "align-center-horizontal": "<path d=\"M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 11.25 C 5.25 11.664 4.914 12 4.5 12 L 0.75 12 C 0.336 12 0 11.664 0 11.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(13.5 6)\"></path><path d=\"M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(5.25 3.75)\"></path><path d=\"M 2.25 0 L 0 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(18.75 12)\"></path><path d=\"M 2.25 0 L 0 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 12)\"></path><path d=\"M 3 0 L 0 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(10.5 12)\"></path><path d=\"M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 11.25 C 5.25 11.664 4.914 12 4.5 12 L 0.75 12 C 0.336 12 0 11.664 0 11.25 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(13.5 6)\"></path><path d=\"M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(5.25 3.75)\"></path>",
  "arrow-right": "<path d=\"M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 15.75 C 16.5 16.164 16.164 16.5 15.75 16.5 L 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 27.75)\"></path><path d=\"M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 15.75 C 16.5 16.164 16.164 16.5 15.75 16.5 L 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 27.75)\"></path><path d=\"M 0 0 L 7.5 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(8.25 12)\"></path><path d=\"M 0 0 L 3 3 L 0 6\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(12.75 9)\"></path>",
  "bandaids": "<path d=\"M 7.372 5.122 C 8.543 3.95 8.543 2.05 7.372 0.879 C 6.2 -0.293 4.3 -0.293 3.128 0.879 L 0 4.008 L 4.242 8.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(12 3.75)\"></path><path d=\"M 0.879 3.128 C -0.293 4.3 -0.293 6.2 0.879 7.372 C 2.05 8.543 3.95 8.543 5.122 7.372 L 8.25 4.242 L 4.008 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 12)\"></path><path d=\"M 5.122 0.879 C 3.95 -0.293 2.05 -0.293 0.879 0.879 C -0.293 2.05 -0.293 3.95 0.879 5.122 L 4.008 8.25 L 8.25 4.008 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 3.75)\"></path><path d=\"M 4.242 0 L 0 4.242 L 3.128 7.372 C 4.3 8.543 6.2 8.543 7.372 7.372 C 8.543 6.2 8.543 4.3 7.372 3.128 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(12 12)\"></path><path d=\"M 0.879 5.122 C -0.293 3.95 -0.293 2.05 0.879 0.879 C 2.05 -0.293 3.95 -0.293 5.122 0.879 L 15.622 11.379 C 16.794 12.55 16.794 14.45 15.622 15.622 C 14.45 16.794 12.55 16.794 11.379 15.622 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 3.75)\"></path><path d=\"M 11.379 0.879 C 12.55 -0.293 14.45 -0.293 15.622 0.879 C 16.794 2.05 16.794 3.95 15.622 5.122 L 5.122 15.622 C 3.95 16.794 2.05 16.794 0.879 15.622 C -0.293 14.45 -0.293 12.55 0.879 11.379 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 3.75)\"></path><g opacity=\"0.5\"><path d=\"M 0 0.375 C 0 0.168 0.168 0 0.375 0 C 0.582 0 0.75 0.168 0.75 0.375 C 0.75 0.582 0.582 0.75 0.375 0.75 C 0.168 0.75 0 0.582 0 0.375 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(11.625 11.625)\"></path></g><path d=\"M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z\" fill=\"currentColor\" transform=\"translate(10.875 10.875)\"></path>",
  "chalkboard": "<path d=\"M 17.25 0 L 0.75 0 C 0.336 0 0 0.336 0 0.75 L 0 14.25 L 12 14.25 L 12 11.25 L 18 11.25 L 18 0.75 C 18 0.336 17.664 0 17.25 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3 4.5)\"></path><path d=\"M 0 14.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 8.25\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 4.5)\"></path><path d=\"M 0 0 L 21 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(1.5 18.75)\"></path><path d=\"M 0 3 L 0 0 L 6 0 L 6 3\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(15 15.75)\"></path>",
  "chart-bar": "<path d=\"M 5.25 9.75 C 5.25 10.164 4.914 10.5 4.5 10.5 L 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(13.5 6.75)\"></path><path d=\"M 0.75 14.25 C 0.336 14.25 0 13.914 0 13.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 13.5 C 5.25 13.914 4.914 14.25 4.5 14.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(5.25 3)\"></path><path d=\"M 16.5 0 L 0 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 20.25)\"></path><path d=\"M 5.25 9.75 C 5.25 10.164 4.914 10.5 4.5 10.5 L 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(13.5 6.75)\"></path><path d=\"M 0.75 14.25 C 0.336 14.25 0 13.914 0 13.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 13.5 C 5.25 13.914 4.914 14.25 4.5 14.25 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(5.25 3)\"></path>",
  "check": "<path d=\"M 18 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 15 C 0 15.828 0.672 16.5 1.5 16.5 L 18 16.5 C 18.828 16.5 19.5 15.828 19.5 15 L 19.5 1.5 C 19.5 0.672 18.828 0 18 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(2.25 3.75)\"></path><path d=\"M 0 5.25 L 3.75 9 L 12.75 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(6 7.5)\"></path>",
  "copy": "<path d=\"M 0 13.5 L 0 0 L 13.5 0 L 13.5 13.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 6.75)\"></path><path d=\"M 0 13.5 L 0 0 L 13.5 0 L 13.5 13.5 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 6.75)\"></path><path d=\"M 0 0 L 13.5 0 L 13.5 13.5\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(6.75 3.75)\"></path>",
  "database": "<path d=\"M 0 4.5 C 0 2.015 3.694 0 8.25 0 C 12.806 0 16.5 2.015 16.5 4.5 C 16.5 6.985 12.806 9 8.25 9 C 3.694 9 0 6.985 0 4.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 3)\"></path><path d=\"M 0 4.5 C 0 2.015 3.694 0 8.25 0 C 12.806 0 16.5 2.015 16.5 4.5 C 16.5 6.985 12.806 9 8.25 9 C 3.694 9 0 6.985 0 4.5 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 3)\"></path><path d=\"M 0 0 L 0 4.5 C 0 6.985 3.694 9 8.25 9 C 12.806 9 16.5 6.985 16.5 4.5 L 16.5 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 7.5)\"></path><path d=\"M 0 0 L 0 4.5 C 0 6.985 3.694 9 8.25 9 C 12.806 9 16.5 6.985 16.5 4.5 L 16.5 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 12)\"></path>",
  "envelope-open": "<path d=\"M 18 6 L 10.637 11.25 L 7.364 11.25 L 0 6 L 9 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3 3)\"></path><path d=\"M 0 6 L 0 15.75 C 0 16.164 0.336 16.5 0.75 16.5 L 17.25 16.5 C 17.664 16.5 18 16.164 18 15.75 L 18 6 L 9 0 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 3)\"></path><path d=\"M 7.133 0 L 0 5.038\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.232 14.25)\"></path><path d=\"M 7.133 5.038 L 0 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(13.636 14.25)\"></path><path d=\"M 18 0 L 10.637 5.25 L 7.364 5.25 L 0 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 9)\"></path>",
  "github-logo": "<path d=\"M 0 6.75 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 6.75 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(9.75 15)\"></path><path d=\"M 5.234 2.25 C 4.338 0.848 2.789 0 1.125 0 C 0.387 1.275 0.267 2.816 0.798 4.191 C 0.285 4.946 0.007 5.837 0 6.75 L 0 7.5 C 0 9.985 2.015 12 4.5 12 L 9 12 C 11.485 12 13.5 9.985 13.5 7.5 L 13.5 6.75 C 13.493 5.837 13.215 4.946 12.702 4.191 C 13.233 2.816 13.113 1.275 12.375 0 C 10.711 0 9.162 0.848 8.266 2.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(6 3)\"></path><path d=\"M 5.234 2.25 C 4.338 0.848 2.789 0 1.125 0 C 0.387 1.275 0.267 2.816 0.798 4.191 C 0.285 4.946 0.007 5.837 0 6.75 L 0 7.5 C 0 9.985 2.015 12 4.5 12 L 9 12 C 11.485 12 13.5 9.985 13.5 7.5 L 13.5 6.75 C 13.493 5.837 13.215 4.946 12.702 4.191 C 13.233 2.816 13.113 1.275 12.375 0 C 10.711 0 9.162 0.848 8.266 2.25 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(6 3)\"></path><path d=\"M 0 6.75 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 6.75\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(9.75 15)\"></path><path d=\"M 9 6 L 6 6 C 4.343 6 3 4.657 3 3 C 3 1.343 1.657 0 0 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(0.75 13.5)\"></path>",
  "google-logo": "<path d=\"M 0 8.25 C 0 3.694 3.694 0 8.25 0 C 12.806 0 16.5 3.694 16.5 8.25 C 16.5 12.806 12.806 16.5 8.25 16.5 C 3.694 16.5 0 12.806 0 8.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 3.75)\"></path><path d=\"M 8.251 8.251 L 16.501 8.251 C 16.501 12.262 13.617 15.691 9.666 16.378 C 5.715 17.066 1.842 14.813 0.487 11.039 C -0.869 7.265 0.686 3.062 4.172 1.08 C 7.658 -0.903 12.064 -0.092 14.616 3.001\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.749 3.749)\"></path>",
  "hand-heart": "<path d=\"M 3.75 5.25 L 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 3.75 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(0.75 14.25)\"></path><path d=\"M 5.625 7.5 C 6.661 7.5 7.5 8.34 7.5 9.375 L 7.5 9.375 C 7.5 10.411 6.661 11.25 5.625 11.25 L 6 11.25 L 9.542 10.437 C 11.608 8.913 14.25 6.491 14.25 3.75 C 14.25 1.717 12.593 0 10.551 0 C 9.057 -0.017 7.702 0.873 7.125 2.25 C 6.548 0.873 5.193 -0.017 3.699 0 C 1.657 0 0 1.717 0 3.75 C 0 5.115 0.656 6.348 1.568 7.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(7.5 3.75)\"></path><path d=\"M 3.75 5.25 L 0.75 5.25 C 0.336 5.25 0 4.914 0 4.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 3.75 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(0.75 14.25)\"></path><path d=\"M 6 3.75 L 9 3.75 L 15.281 2.305 C 15.749 2.177 16.25 2.274 16.637 2.568 C 17.023 2.863 17.249 3.32 17.25 3.805 L 17.25 3.805 C 17.25 4.395 16.917 4.934 16.389 5.198 L 12.75 6.75 L 6.75 8.25 L 0 8.25 L 0 3 L 2.344 0.656 C 2.767 0.235 3.34 -0.001 3.938 0 L 8.625 0 C 9.661 0 10.5 0.839 10.5 1.875 L 10.5 1.875 C 10.5 2.911 9.661 3.75 8.625 3.75 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(4.5 11.25)\"></path><path d=\"M 1.568 7.5 C 0.656 6.349 0 5.115 0 3.75 C 0 1.717 1.657 0 3.699 0 C 5.193 -0.017 6.548 0.873 7.125 2.25 C 7.702 0.873 9.057 -0.017 10.551 0 C 12.593 0 14.25 1.717 14.25 3.75 C 14.25 6.491 11.608 8.913 9.542 10.437\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(7.5 3.75)\"></path>",
  "lightning": "<path d=\"M 10.5 0 L 9 7.5 L 15 9.75 L 4.5 21 L 6 13.5 L 0 11.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(4.5 1.5)\"></path><path d=\"M 10.5 0 L 9 7.5 L 15 9.75 L 4.5 21 L 6 13.5 L 0 11.25 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(4.5 1.5)\"></path>",
  "linkedin-logo": "<path d=\"M 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 17.25 C 18 17.664 17.664 18 17.25 18 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3 3)\"></path><path d=\"M 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 17.25 C 18 17.664 17.664 18 17.25 18 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 3)\"></path><path d=\"M 0 0 L 0 6\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(11.25 10.5)\"></path><path d=\"M 0 0 L 0 6\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(8.25 10.5)\"></path><path d=\"M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 L 5.25 6\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(11.25 10.5)\"></path><path d=\"M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z\" fill=\"currentColor\" transform=\"translate(7.125 6.75)\"></path>",
  "list": "<path d=\"M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 6)\"></path><path d=\"M 0 0 L 16.5 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 12)\"></path><path d=\"M 0 0 L 16.5 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 6)\"></path><path d=\"M 0 0 L 16.5 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 18)\"></path>",
  "meta-logo": "<path d=\"M 5.017 0 C 3.833 0 2.757 1.003 1.735 2.463 L 0 5.494 C 2.04 9.231 4.023 13.5 6.464 13.5 C 12.25 13.5 9.357 0 5.017 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(12.046 5.25)\"></path><path d=\"M 4.688 0 C 0.347 0 -2.546 13.5 3.24 13.5 C 5.021 13.5 6.551 11.237 8.042 8.564 L 9.796 5.494 C 8.209 2.586 6.586 0 4.688 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(2.25 5.25)\"></path><path d=\"M 8.042 8.564 C 6.551 11.237 5.018 13.5 3.24 13.5 C -2.546 13.5 0.347 0 4.688 0 C 9.028 0 11.921 13.5 16.261 13.5 C 22.046 13.5 19.153 0 14.813 0 C 13.63 0 12.553 1.003 11.531 2.463\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(2.25 5.25)\"></path>",
  "money": "<path d=\"M 0 1.238 L 0 12.488 C 8.591 8.291 12.409 16.459 21 12.261 L 21 1.011 C 12.409 5.209 8.591 -2.959 0 1.238 Z M 10.5 9 C 9.257 9 8.25 7.993 8.25 6.75 C 8.25 5.507 9.257 4.5 10.5 4.5 C 11.743 4.5 12.75 5.507 12.75 6.75 C 12.75 7.993 11.743 9 10.5 9 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(1.5 5.25)\"></path><path d=\"M 21 12.261 C 12.409 16.459 8.591 8.291 0 12.488 L 0 1.238 C 8.591 -2.959 12.409 5.209 21 1.011 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(1.5 5.25)\"></path><path d=\"M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(9.75 9.75)\"></path><path d=\"M 0 0 L 0 4.5\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(4.5 9)\"></path><path d=\"M 0 0 L 0 4.5\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(19.5 10.5)\"></path>",
  "path": "<path d=\"M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(1.5 13.5)\"></path><path d=\"M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(1.5 13.5)\"></path><path d=\"M 0 0 L 3 3 L 0 6\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(19.5 4.5)\"></path><path d=\"M 0 9 C 8.25 9 3.75 0 12 0 L 15 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(7.5 7.5)\"></path>",
  "phone-call": "<path d=\"M 0 0 C 2.568 0.676 4.574 2.682 5.25 5.25\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(14.25 4.5)\"></path><path d=\"M 0 0 C 1.549 0.414 2.586 1.451 3 3\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(13.5 7.5)\"></path><path d=\"M 11.662 10.625 C 11.873 10.485 12.14 10.461 12.373 10.561 L 16.794 12.542 C 17.1 12.672 17.284 12.989 17.244 13.32 C 16.943 15.571 15.021 17.251 12.75 17.25 C 5.708 17.25 0 11.541 0 4.5 C -0.002 2.228 1.679 0.307 3.93 0.005 C 4.26 -0.034 4.577 0.149 4.708 0.455 L 6.689 4.88 C 6.788 5.111 6.765 5.376 6.627 5.586 L 4.624 7.968 C 4.479 8.187 4.46 8.465 4.573 8.701 C 5.348 10.288 6.989 11.909 8.581 12.677 C 8.818 12.789 9.097 12.768 9.315 12.621 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3 3.75)\"></path><path d=\"M 11.662 10.625 C 11.873 10.485 12.14 10.461 12.373 10.561 L 16.794 12.542 C 17.1 12.672 17.284 12.989 17.244 13.32 C 16.943 15.571 15.021 17.251 12.75 17.25 C 5.708 17.25 0 11.541 0 4.5 C -0.002 2.228 1.679 0.307 3.93 0.005 C 4.26 -0.034 4.577 0.149 4.708 0.455 L 6.689 4.88 C 6.788 5.111 6.765 5.376 6.627 5.586 L 4.624 7.968 C 4.479 8.187 4.46 8.465 4.573 8.701 C 5.348 10.288 6.989 11.909 8.581 12.677 C 8.818 12.789 9.097 12.768 9.315 12.621 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 3.75)\"></path>",
  "play": "<path d=\"M 0 0.736 L 0 17.259 C 0.005 17.527 0.153 17.772 0.388 17.902 C 0.623 18.031 0.91 18.025 1.139 17.886 L 14.647 9.625 C 14.866 9.492 15 9.254 15 8.997 C 15 8.741 14.866 8.503 14.647 8.37 L 1.139 0.109 C 0.91 -0.03 0.623 -0.036 0.388 0.093 C 0.153 0.222 0.005 0.468 0 0.736 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(6.75 3.003)\"></path><path d=\"M 0 0.736 L 0 17.259 C 0.005 17.527 0.153 17.772 0.388 17.902 C 0.623 18.031 0.91 18.025 1.139 17.886 L 14.647 9.625 C 14.866 9.492 15 9.254 15 8.997 C 15 8.741 14.866 8.503 14.647 8.37 L 1.139 0.109 C 0.91 -0.03 0.623 -0.036 0.388 0.093 C 0.153 0.222 0.005 0.468 0 0.736 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(6.75 3.003)\"></path>",
  "plugs-connected": "<path d=\"M 5.909 11.341 C 5.031 12.22 3.606 12.22 2.727 11.341 L 0.659 9.273 C -0.22 8.394 -0.22 6.97 0.659 6.091 L 6.091 0.659 C 6.97 -0.22 8.394 -0.22 9.273 0.659 L 11.341 2.727 C 12.22 3.606 12.22 5.031 11.341 5.909 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(6 6)\"></path><path d=\"M 0 0 L 7.5 7.5\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(8.25 8.25)\"></path><path d=\"M 5.443 0 L 0 5.443\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(16.307 2.25)\"></path><path d=\"M 5.443 0 L 0 5.443\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(2.25 16.307)\"></path><path d=\"M 0 0 L 0.75 1.875\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(9 3)\"></path><path d=\"M 0 0 L 1.875 0.75\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3 9)\"></path><path d=\"M 0 0 L 1.875 0.75\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(19.125 14.25)\"></path><path d=\"M 0 0 L 0.75 1.875\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(14.25 19.125)\"></path>",
  "plus": "<path d=\"M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 3.75)\"></path><path d=\"M 0 0 L 16.5 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 12)\"></path><path d=\"M 0 0 L 0 16.5\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(12 3.75)\"></path>",
  "rocket": "<path d=\"M 5.25 0 L 5.25 5.78 C 5.25 5.978 5.171 6.169 5.031 6.309 L 1.81 9.53 C 1.609 9.73 1.312 9.8 1.043 9.71 C 0.774 9.62 0.578 9.386 0.538 9.105 L 0 5.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(12 11.25)\"></path><path d=\"M 9.749 0 L 3.969 0 C 3.77 0 3.58 0.079 3.439 0.219 L 0.219 3.44 C 0.019 3.641 -0.051 3.938 0.039 4.207 C 0.129 4.476 0.363 4.672 0.644 4.712 L 4.499 5.25 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.001 6.75)\"></path><path d=\"M 5.115 2.473 C 4.752 3.269 3.53 5.115 0 5.115 C 0 1.585 1.846 0.363 2.642 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 15.135)\"></path><path d=\"M 10.417 6.833 C 12.667 4.583 12.807 1.907 12.737 0.713 C 12.713 0.337 12.413 0.037 12.037 0.013 C 10.843 -0.057 8.168 0.082 5.917 2.333 L 0 8.25 L 4.5 12.75 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(7.5 3.75)\"></path><path d=\"M 9.749 0 L 3.969 0 C 3.77 0 3.58 0.079 3.439 0.219 L 0.219 3.44 C 0.019 3.641 -0.051 3.938 0.039 4.207 C 0.129 4.476 0.363 4.672 0.644 4.712 L 4.499 5.25\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.001 6.75)\"></path><path d=\"M 5.25 0 L 5.25 5.78 C 5.25 5.978 5.171 6.169 5.031 6.309 L 1.81 9.53 C 1.609 9.73 1.312 9.8 1.043 9.71 C 0.774 9.62 0.578 9.386 0.538 9.105 L 0 5.25\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(12 11.25)\"></path><path d=\"M 5.115 2.473 C 4.752 3.269 3.53 5.115 0 5.115 C 0 1.585 1.846 0.363 2.642 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 15.135)\"></path>",
  "target": "<path d=\"M 0 4.5 C 0 2.015 2.015 0 4.5 0 C 6.985 0 9 2.015 9 4.5 C 9 6.985 6.985 9 4.5 9 C 2.015 9 0 6.985 0 4.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(7.5 7.5)\"></path><path d=\"M 0 9 L 9 0\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(12 3)\"></path><path d=\"M 15.338 2.625 C 12.033 -0.672 6.754 -0.89 3.188 2.123 C -0.378 5.135 -1.044 10.377 1.655 14.186 C 4.354 17.995 9.519 19.104 13.544 16.738 C 17.569 14.372 19.112 9.32 17.097 5.109\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.026 3.011)\"></path><path d=\"M 7.68 1.316 C 6.144 -0.218 3.732 -0.437 1.945 0.796 C 0.158 2.029 -0.494 4.362 0.395 6.342 C 1.284 8.323 3.46 9.387 5.569 8.871 C 7.678 8.356 9.118 6.409 8.993 4.241\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(7.501 7.502)\"></path>",
  "thumbs-down": "<path d=\"M 0.75 0 L 5.25 0 L 5.25 0 L 5.25 9.75 L 5.25 9.75 L 0.75 9.75 C 0.336 9.75 0 9.414 0 9 L 0 0.75 C 0 0.336 0.336 0 0.75 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(2.25 4.5)\"></path><path d=\"M 0.75 0 L 5.25 0 L 5.25 0 L 5.25 9.75 L 5.25 9.75 L 0.75 9.75 C 0.336 9.75 0 9.414 0 9 L 0 0.75 C 0 0.336 0.336 0 0.75 0 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(2.25 4.5)\"></path><path d=\"M 0 9.75 L 3.75 17.25 C 5.407 17.25 6.75 15.907 6.75 14.25 L 6.75 12 L 12.75 12 C 13.18 12 13.59 11.815 13.875 11.492 C 14.159 11.169 14.292 10.74 14.238 10.313 L 13.113 1.313 C 13.018 0.563 12.381 0 11.625 0 L 0 0\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(7.5 4.5)\"></path>",
  "thumbs-up": "<path d=\"M 0.75 0 L 5.25 0 L 5.25 0 L 5.25 9.75 L 5.25 9.75 L 0.75 9.75 C 0.336 9.75 0 9.414 0 9 L 0 0.75 C 0 0.336 0.336 0 0.75 0 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(2.25 9.75)\"></path><path d=\"M 0.75 0 L 5.25 0 L 5.25 0 L 5.25 9.75 L 5.25 9.75 L 0.75 9.75 C 0.336 9.75 0 9.414 0 9 L 0 0.75 C 0 0.336 0.336 0 0.75 0 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(2.25 9.75)\"></path><path d=\"M 0 7.5 L 3.75 0 C 5.407 0 6.75 1.343 6.75 3 L 6.75 5.25 L 12.75 5.25 C 13.18 5.25 13.59 5.435 13.875 5.758 C 14.159 6.081 14.292 6.51 14.238 6.938 L 13.113 15.938 C 13.018 16.687 12.381 17.25 11.625 17.25 L 0 17.25\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(7.5 2.25)\"></path>",
  "user-sound": "<path d=\"M 0 5.625 C 0 2.518 2.518 0 5.625 0 C 8.732 0 11.25 2.518 11.25 5.625 C 11.25 8.732 8.732 11.25 5.625 11.25 C 2.518 11.25 0 8.732 0 5.625 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(4.5 4.5)\"></path><path d=\"M 0 5.625 C 0 2.518 2.518 0 5.625 0 C 8.732 0 11.25 2.518 11.25 5.625 C 11.25 8.732 8.732 11.25 5.625 11.25 C 2.518 11.25 0 8.732 0 5.625 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(4.5 4.5)\"></path><path d=\"M 0 3.75 C 1.927 1.458 4.646 0 7.875 0 C 11.104 0 13.823 1.458 15.75 3.75\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(2.25 15.75)\"></path><path d=\"M 0 0 C 1 2.352 1 5.009 0 7.361\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(18.75 6.444)\"></path><path d=\"M 0 0 C 1.33 3.114 1.33 6.636 0 9.75\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(21.503 5.25)\"></path>",
  "waves": "<path d=\"M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(3.75 3.75)\"></path><path d=\"M 0 1.651 C 6.75 -3.945 9.75 6.945 16.5 1.349\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 13.5)\"></path><path d=\"M 0 1.651 C 6.75 -3.945 9.75 6.945 16.5 1.349\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(3.75 7.5)\"></path>",
  "x-logo": "<path d=\"M 0 0 L 4.5 0 L 15 16.5 L 10.5 16.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(4.5 3.75)\"></path><path d=\"M 0 0 L 4.5 0 L 15 16.5 L 10.5 16.5 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(4.5 3.75)\"></path><path d=\"M 6.176 0 L 0 6.794\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(4.5 13.456)\"></path><path d=\"M 6.176 0 L 0 6.794\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(13.324 3.75)\"></path>",
  "youtube-logo": "<path d=\"M 18.993 2.206 C 18.876 1.737 18.54 1.353 18.09 1.175 C 14.951 -0.033 9.75 0 9.75 0 C 9.75 0 4.549 -0.033 1.406 1.179 C 0.957 1.358 0.621 1.742 0.503 2.211 C 0.288 3.051 0 4.696 0 7.5 C 0 10.304 0.288 11.949 0.507 12.794 C 0.625 13.261 0.959 13.643 1.406 13.821 C 4.549 15.033 9.75 15 9.75 15 C 9.75 15 14.951 15.033 18.094 13.821 C 18.542 13.644 18.878 13.262 18.997 12.794 C 19.216 11.95 19.504 10.304 19.504 7.5 C 19.504 4.696 19.212 3.051 18.993 2.206 Z M 8.25 10.5 L 8.25 4.5 L 12.75 7.5 Z\" fill-opacity=\"0\" fill=\"currentColor\" transform=\"translate(2.25 4.5)\"></path><path d=\"M 4.5 3 L 0 0 L 0 6 Z\" fill=\"transparent\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(10.5 9)\"></path><path d=\"M 0 7.5 C 0 10.304 0.288 11.949 0.507 12.794 C 0.625 13.261 0.959 13.643 1.406 13.821 C 4.549 15.033 9.75 15 9.75 15 C 9.75 15 14.951 15.033 18.094 13.821 C 18.542 13.644 18.878 13.262 18.997 12.794 C 19.216 11.95 19.504 10.304 19.504 7.5 C 19.504 4.696 19.216 3.052 18.997 2.206 C 18.879 1.737 18.543 1.353 18.094 1.175 C 14.951 -0.033 9.75 0 9.75 0 C 9.75 0 4.549 -0.033 1.406 1.179 C 0.957 1.358 0.621 1.742 0.503 2.211 C 0.288 3.051 0 4.696 0 7.5 Z\" fill=\"transparent\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" stroke=\"currentColor\" transform=\"translate(2.25 4.5)\"></path>"
};
const PHOSPHOR_CDN = 'https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/';
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  style,
  title
}) {
  const inner = NX_ICON_PATHS[name];
  if (inner) {
    const html = inner.split('stroke-width="1.5"').join('stroke-width="' + strokeWidth + '"');
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      role: title ? 'img' : 'presentation',
      "aria-label": title,
      style: Object.assign({
        display: 'block',
        flex: 'none',
        color: color
      }, style),
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }
  // Fallback: glyphs the site uses but did not export as SVG (e.g. caret-down) come from Phosphor via CDN.
  const url = 'url(' + PHOSPHOR_CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : 'presentation',
    "aria-label": title,
    style: Object.assign({
      display: 'block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: url + ' center / contain no-repeat',
      mask: url + ' center / contain no-repeat'
    }, style)
  });
}
const ICON_NAMES = Object.keys(NX_ICON_PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const NX_MARK = 'M 14.03 7.738 L 14.03 14.211 L 12.555 13.368 C 9.935 11.862 8.31 9.062 8.31 6.022 L 7.226 6.022 L 7.226 13.428 C 7.226 15.837 8.611 18.065 10.809 19.118 L 14.06 20.684 L 14.06 14.211 L 15.535 15.054 C 18.155 16.559 19.781 19.359 19.781 22.4 L 20.865 22.4 L 20.865 14.994 C 20.865 12.585 19.48 10.357 17.282 9.303 Z';

// Nexura lockup: 28px mark + "Nexura" wordmark set in Inter 500 20px (-0.04em), 2px gap — exactly as in the site nav.
function Logo({
  tone = 'dark',
  markOnly = false,
  size = 28,
  href,
  style
}) {
  const color = tone === 'light' ? 'var(--white)' : 'var(--black)';
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      textDecoration: 'none',
      color: color
    }, style)
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 28 28",
    "aria-hidden": markOnly ? undefined : 'true',
    role: markOnly ? 'img' : undefined,
    "aria-label": markOnly ? 'Nexura' : undefined
  }, /*#__PURE__*/React.createElement("path", {
    d: NX_MARK,
    fill: "currentColor"
  })), markOnly ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 ' + Math.round(size * 0.714) + 'px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em',
      color: color
    }
  }, "Nexura"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
// Grey status pill used inside product UI cards (workflow "Input" / "Output").
function Pill({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      borderRadius: 20,
      background: 'var(--grey-150)',
      color: 'var(--text-primary)',
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      whiteSpace: 'nowrap'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
// "Static" badge from the site: pale-blue pill with blue-ink 13px text (Most Popular, blog categories, section eyebrows).
function Tag({
  children,
  tone = 'blue',
  style
}) {
  const tones = {
    blue: {
      bg: 'var(--surface-tag)',
      fg: 'var(--text-tag)'
    },
    neutral: {
      bg: 'var(--grey-100)',
      fg: 'var(--text-secondary)'
    },
    dark: {
      bg: 'var(--black)',
      fg: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 10px',
      borderRadius: 100,
      background: t.bg,
      color: t.fg,
      font: '400 13px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      whiteSpace: 'nowrap'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
// Native select styled like TextField, with a caret on the right and #999 placeholder ("Select…").
function SelectField({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  name,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const empty = !value;
  return /*#__PURE__*/React.createElement("label", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }, style)
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value || '',
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: '12px 40px 12px 16px',
      background: 'var(--white)',
      border: 0,
      outline: 0,
      borderRadius: 0,
      boxShadow: focus ? 'inset 0 0 0 1px var(--focus-ring)' : 'none',
      font: '400 16px/1.2 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: empty ? 'var(--text-placeholder)' : 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "caret-down",
    size: 16,
    color: "var(--text-tertiary)",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
// Contact-form field: 14/500 #605f5f label over a borderless white input (12px 16px), blue #79a9fc hairline on focus.
function TextField({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  type = 'text',
  name,
  required,
  rows = 5,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }, style)
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, {
    type: multiline ? undefined : type,
    name: name,
    required: required,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 16px',
      background: 'var(--white)',
      border: 0,
      outline: 0,
      borderRadius: 0,
      resize: multiline ? 'vertical' : undefined,
      boxShadow: focus ? 'inset 0 0 0 1px var(--focus-ring)' : 'none',
      font: '400 16px/1.2 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BlogCard.jsx
try { (() => {
// Blog list card: 16px padded #fafafa tile — illustration (1.36:1), category tag + date, dashed rule, H6 title, 14px excerpt, author.
function BlogCard({
  image,
  category,
  date,
  title,
  excerpt,
  author,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 16,
      background: 'var(--surface-card)',
      textDecoration: 'none',
      color: 'inherit',
      width: '100%'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1.36',
      width: '100%',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 600ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, category), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, date)), /*#__PURE__*/React.createElement(__ds_scope.Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h6", {
    style: {
      margin: 0,
      font: '500 20px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, excerpt)), author ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, "\u2014 By ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, author)) : null);
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FaqItem.jsx
try { (() => {
// FAQ row: white (or #fafafa) block, 24px padding; 16/500 question, plus icon rotates to × when open; answer in #605f5f.
function FaqItem({
  question,
  answer,
  open = false,
  onToggle,
  surface = 'white',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    role: "button",
    "aria-expanded": open,
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: open ? 12 : 0,
      width: '100%',
      padding: 24,
      cursor: 'pointer',
      background: surface === 'card' ? 'var(--surface-card)' : 'var(--white)',
      transition: 'gap 300ms'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 500,
      font: '500 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      textWrap: 'balance'
    }
  }, question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16,
    color: "var(--text-tertiary)",
    style: {
      transition: 'transform 300ms var(--ease-out)',
      transform: open ? 'rotate(45deg)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows 400ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      overflow: 'hidden',
      maxWidth: 480,
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)',
      textWrap: 'balance'
    }
  }, answer)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureTab.jsx
try { (() => {
// Accordion-style feature row: icon + H6 title; description revealed when open. Closed rows go grey (#999).
function FeatureTab({
  icon = 'user-sound',
  title,
  description,
  open = false,
  onClick,
  style
}) {
  const c = open ? 'var(--text-primary)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    role: "button",
    "aria-expanded": open,
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: open ? 16 : 0,
      width: '100%',
      maxWidth: 389,
      cursor: open ? 'default' : 'pointer'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: c
  }), /*#__PURE__*/React.createElement("h6", {
    style: {
      margin: 0,
      font: '500 20px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em',
      color: c,
      transition: 'color 300ms'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      opacity: open ? 1 : 0,
      transition: 'grid-template-rows 400ms var(--ease-out), opacity 400ms'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      overflow: 'hidden',
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { FeatureTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureTab.jsx", error: String((e && e.message) || e) }); }

// components/marketing/IntegrationCard.jsx
try { (() => {
// Integration tile: #fafafa, 40px white logo disc + H6 name, 14px description; a black arrow disc slides in on hover.
function IntegrationCard({
  logo,
  name,
  description,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 24,
      background: 'var(--surface-card)',
      border: '1px solid ' + (hover ? 'var(--border-subtle)' : 'var(--surface-card)'),
      textDecoration: 'none',
      color: 'inherit',
      width: '100%',
      transition: 'border-color 200ms'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 100,
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      width: 24,
      height: 24,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("h6", {
    style: {
      margin: 0,
      font: '500 18px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      top: '50%',
      width: 32,
      height: 32,
      borderRadius: 100,
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateY(-50%) ' + (hover ? 'scale(1)' : 'scale(0.6)'),
      opacity: hover ? 1 : 0,
      transition: 'all 300ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--white)"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { IntegrationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/IntegrationCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoStrip.jsx
try { (() => {
// Customer logo row with caption — "Powering smarter campaigns for 2,000+ teams and counting." Optional slow marquee.
function LogoStrip({
  logos = [],
  caption,
  marquee = true,
  height = 30,
  style
}) {
  const row = logos.concat(marquee ? logos : []);
  const id = React.useMemo(() => 'nxm' + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      width: '100%'
    }, style)
  }, caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)',
      textAlign: 'center'
    }
  }, caption) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden',
      WebkitMask: 'linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)',
      mask: 'linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)'
    }
  }, marquee ? /*#__PURE__*/React.createElement("style", null, '@keyframes ' + id + '{from{transform:translateX(0)}to{transform:translateX(-50%)}}') : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 64,
      width: 'max-content',
      animation: marquee ? id + ' 30s linear infinite' : 'none',
      justifyContent: 'center'
    }
  }, row.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l,
    alt: "",
    style: {
      height: height,
      width: 'auto',
      flex: 'none'
    }
  })))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
// #fafafa square card, 24px padding: plan name (H5) → Geist price → label → CTA → description → check list.
function PricingCard({
  name,
  price,
  currency = '$',
  priceLabel,
  cta = 'Get started',
  ctaHref,
  highlighted = false,
  badge,
  description,
  features = [],
  style
}) {
  const isNumber = /^[0-9.,]+$/.test(String(price));
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      width: 315,
      maxWidth: '100%',
      padding: 24,
      background: 'var(--surface-card)'
    }, style)
  }, badge ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    style: {
      position: 'absolute',
      top: 24,
      right: 24
    }
  }, badge) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      font: '500 22px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 2
    }
  }, isNumber ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 22px/1.4 var(--font-numeric)',
      letterSpacing: '-0.03em'
    }
  }, currency) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 44px/1.1 var(--font-numeric)',
      letterSpacing: '-0.03em'
    }
  }, price)), priceLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, priceLabel) : null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    variant: highlighted ? 'filled' : 'outline',
    href: ctaHref
  }, cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    color: "var(--text-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em'
    }
  }, f))))));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeader.jsx
try { (() => {
// Section intro: H2 (40/500, -0.04em) + body-lg description in #605f5f. Centered (600px column) or left-aligned.
function SectionHeader({
  title,
  description,
  eyebrow,
  align = 'center',
  as = 'h2',
  style
}) {
  const center = align === 'center';
  const H = as;
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: center ? 'center' : 'flex-start',
      textAlign: center ? 'center' : 'left',
      width: '100%',
      maxWidth: 600
    }, style)
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Tag, null, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      font: as === 'h1' ? '500 54px/1.2 var(--font-sans)' : '500 40px/1.2 var(--font-sans)',
      letterSpacing: '-0.04em',
      color: 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: center ? '80%' : '100%',
      font: '400 18px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)',
      textWrap: 'balance'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepItem.jsx
try { (() => {
// Numbered step: 24px pale-blue circle with the number, then a 16px label.
function StepItem({
  number,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: 'none',
      borderRadius: 100,
      background: 'var(--blue-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 14px/1 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
// Expanding testimonial: closed = 125px photo strip; open = photo + H6 quote and attribution on #fafafa, 320px tall.
function TestimonialCard({
  quote,
  author,
  photo,
  open = true,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: Object.assign({
      display: 'flex',
      alignItems: 'stretch',
      gap: 16,
      height: 320,
      width: open ? 688 : 125,
      maxWidth: '100%',
      flex: 'none',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      cursor: open ? 'default' : 'pointer',
      transition: 'width 600ms var(--ease-out)'
    }, style)
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: author,
    style: {
      width: open ? 260 : 125,
      height: '100%',
      objectFit: 'cover',
      flex: 'none',
      filter: open ? 'none' : 'grayscale(1)',
      transition: 'all 600ms var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 24px 24px 8px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h6", {
    style: {
      margin: 0,
      font: '500 20px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em',
      color: 'var(--text-primary)'
    }
  }, quote), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, author)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterTabs.jsx
try { (() => {
// Text tabs with a 1px black underline on the active item (solution switcher, blog & integration category filters).
function FilterTabs({
  items,
  value,
  onChange,
  size = 'md',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: Object.assign({
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }, style)
  }, items.map(it => {
    const on = it === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it),
      style: {
        background: 'none',
        border: 0,
        borderBottom: '1px solid ' + (on ? 'var(--black)' : 'transparent'),
        padding: '0 0 6px',
        cursor: 'pointer',
        font: '500 ' + (size === 'sm' ? 14 : 16) + 'px/1.4 var(--font-sans)',
        letterSpacing: '-0.03em',
        color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
        transition: 'color 200ms, border-color 200ms'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
// Navbar / footer text link. Pill hit-area (8px 12px, radius 30) that picks up a #f4f4f4 wash on hover.
function NavLink({
  children,
  href,
  active = false,
  hasMenu = false,
  tone = 'dark',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: light ? '4px 0' : '8px 12px',
      borderRadius: 30,
      background: !light && (hover || active) ? 'var(--grey-100)' : 'transparent',
      transition: 'background 200ms var(--ease-standard)',
      textDecoration: 'none',
      cursor: 'pointer',
      color: light ? hover ? 'var(--white-a70)' : 'var(--white)' : 'var(--text-primary)',
      font: (light ? '400' : '500') + ' 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      whiteSpace: 'nowrap'
    }, style)
  }, children, hasMenu ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "caret-down",
    size: 16,
    color: "var(--grey-800)",
    style: {
      transition: 'transform 200ms',
      transform: hover ? 'rotate(180deg)' : 'none'
    }
  }) : null);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const NX_FOOTER_COLUMNS = [{
  title: 'Platform',
  links: ['Home', 'Product', 'Integration', 'Pricing', 'Demo']
}, {
  title: 'Resources',
  links: ['Blog', 'Contact']
}, {
  title: 'Legal',
  links: ['Terms of Services', 'Privacy Policy']
}];

// Black footer: logo + H4 tagline + round social buttons on the left, link columns on the right, small print below.
function Footer({
  tagline = 'The AI agent built for modern marketing teams.',
  columns = NX_FOOTER_COLUMNS,
  socials = ['x-logo', 'linkedin-logo', 'youtube-logo'],
  copyright = '© Nexura. All rights reserved.',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: Object.assign({
      background: 'var(--black)',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 1250,
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 64,
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: '500 28px/1.4 var(--font-sans)',
      letterSpacing: '-0.04em',
      color: 'var(--white-a80)',
      textWrap: 'balance'
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      padding: 12,
      borderRadius: 100,
      background: 'var(--white-a10)',
      display: 'flex',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 20,
    color: "var(--white)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--white-a70)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: l,
    tone: "light",
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--white-a10)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 13px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--white-a50)'
    }
  }, copyright))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const NX_DEFAULT_LINKS = [{
  label: 'Product',
  href: '#product'
}, {
  label: 'Pricing',
  href: '#pricing'
}, {
  label: 'Integration',
  href: '#integration'
}, {
  label: 'Resources',
  href: '#resources',
  hasMenu: true
}];

// Fixed white top bar: logo left, centred links, black "Get started" pill right. Container 1250 max, 16px 64px inset.
function Navbar({
  links = NX_DEFAULT_LINKS,
  current,
  ctaLabel = 'Get started',
  ctaHref,
  onNavigate,
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: Object.assign({
      position: 'relative',
      width: '100%',
      background: 'var(--white)',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'center'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 1250,
      padding: '16px 64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 73
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    href: "#"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, links.map(l => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: l.label,
    href: l.href,
    hasMenu: l.hasMenu,
    active: current === l.label,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(l.label);
    } : undefined
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedToggle.jsx
try { (() => {
// Monthly / Yearly toggle: #f4f4f4 track (3px padding, radius 40), active segment is a white pill with a soft shadow, inactive at 50% opacity.
function SegmentedToggle({
  options = ['Monthly', 'Yearly'],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'inline-flex',
      gap: 3,
      padding: 3,
      borderRadius: 40,
      background: 'var(--grey-100)'
    }, style)
  }, options.map(o => {
    const on = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => onChange && onChange(o),
      style: {
        width: 110,
        padding: '4px 12px',
        borderRadius: 40,
        border: 0,
        cursor: on ? 'default' : 'pointer',
        background: on ? 'var(--white)' : 'transparent',
        boxShadow: on ? 'var(--shadow-toggle)' : 'none',
        opacity: on ? 1 : 0.5,
        font: '500 16px/1.4 var(--font-sans)',
        letterSpacing: '-0.03em',
        color: 'var(--text-primary)',
        transition: 'all 250ms var(--ease-standard)'
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { SegmentedToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedToggle.jsx", error: String((e && e.message) || e) }); }

// components/product/ChatMessage.jsx
try { (() => {
// Chat bubble for the AI-agent illustration: user = grey #f4f4f4 bubble right-aligned; agent = white card with mark, left-aligned.
function ChatMessage({
  role = 'user',
  children,
  style
}) {
  const user = role === 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      justifyContent: user ? 'flex-end' : 'flex-start',
      gap: 8,
      width: '100%'
    }, style)
  }, user ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 100,
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    markOnly: true,
    tone: "light",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '80%',
      padding: '10px 14px',
      borderRadius: 12,
      background: user ? 'var(--grey-100)' : 'var(--white)',
      boxShadow: user ? 'none' : 'var(--shadow-ui-card)',
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, children));
}
Object.assign(__ds_scope, { ChatMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ChatMessage.jsx", error: String((e && e.message) || e) }); }

// components/product/CursorChip.jsx
try { (() => {
// Multiplayer-style cursor: a filled arrow (white stroke, soft drop shadow) + a name chip in amber or blue.
const NX_CURSOR = 'M 1.958 0.682 C 1.168 0.407 0.409 1.167 0.685 1.957 L 5.442 15.539 C 5.745 16.404 6.955 16.44 7.309 15.594 L 9.6 10.106 C 9.701 9.864 9.894 9.671 10.136 9.569 L 15.594 7.281 C 16.44 6.927 16.403 5.716 15.537 5.415 Z';
function CursorChip({
  name,
  color = 'amber',
  rotate,
  style
}) {
  const fill = color === 'blue' ? 'var(--cursor-blue)' : 'var(--cursor-amber)';
  const r = rotate !== undefined ? rotate : color === 'blue' ? 90 : 13;
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      pointerEvents: 'none'
    }, style)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    style: {
      transform: 'rotate(' + r + 'deg)',
      overflow: 'visible',
      filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.25))'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: NX_CURSOR,
    fill: fill,
    stroke: "#fff",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 14,
      padding: '4px 8px',
      borderRadius: 100,
      background: fill,
      border: '1px solid var(--white)',
      boxShadow: 'var(--shadow-chip)',
      font: '400 13px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--white)',
      whiteSpace: 'nowrap'
    }
  }, name));
}
Object.assign(__ds_scope, { CursorChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/CursorChip.jsx", error: String((e && e.message) || e) }); }

// components/product/FlowCard.jsx
try { (() => {
// Workflow node card: white, 12px radius, soft shadow, 16px padding — title + grey pill, optional description.
function FlowCard({
  title,
  pill,
  description,
  width = 250,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: width,
      maxWidth: '100%',
      padding: 16,
      borderRadius: 12,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-ui-soft)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em'
    }
  }, title), pill ? /*#__PURE__*/React.createElement(__ds_scope.Pill, null, pill) : null), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { FlowCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/FlowCard.jsx", error: String((e && e.message) || e) }); }

// components/product/MetricStat.jsx
try { (() => {
// Big Geist number + small label — "3.8x ROI improvement", "72% Time saved".
function MetricStat({
  value,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 44px/1.1 var(--font-numeric)',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/product/NotificationBanner.jsx
try { (() => {
const NX_TINTS = {
  purple: {
    bg: 'var(--purple-a10)',
    fg: 'var(--purple-500)'
  },
  sky: {
    bg: 'var(--sky-a10)',
    fg: 'var(--blue-500)'
  },
  yellow: {
    bg: 'var(--yellow-a10)',
    fg: 'var(--amber-500)'
  },
  blue: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-500)'
  }
};

// Floating product notification: white 12px card (300x64), tinted icon disc, 16/500 title + 14px subtitle.
function NotificationBanner({
  icon = 'meta-logo',
  tint = 'purple',
  title,
  subtitle,
  style
}) {
  const t = NX_TINTS[tint] || NX_TINTS.purple;
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      width: 300,
      maxWidth: '100%',
      height: 64,
      padding: 12,
      borderRadius: 12,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-ui-card)'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 100,
      background: t.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: t.fg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { NotificationBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/NotificationBanner.jsx", error: String((e && e.message) || e) }); }

// components/product/PromptBox.jsx
try { (() => {
// Hero AI prompt: white glass box (2px white border, 12px radius, blur 5px, big soft shadow) with a black round send button bottom-right.
function PromptBox({
  placeholder = 'Generate a report for',
  value,
  onChange,
  onSubmit,
  width = 500,
  height = 160,
  style
}) {
  const [inner, setInner] = React.useState('');
  const v = value !== undefined ? value : inner;
  const set = x => {
    if (onChange) onChange(x);
    if (value === undefined) setInner(x);
  };
  const submit = () => {
    if (onSubmit) onSubmit(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      position: 'relative',
      width: width,
      maxWidth: '100%',
      height: height,
      padding: 20,
      borderRadius: 12,
      background: 'var(--white)',
      border: '2px solid var(--white)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--shadow-float)'
    }, style)
  }, /*#__PURE__*/React.createElement("textarea", {
    value: v,
    placeholder: placeholder,
    onChange: e => set(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submit();
      }
    },
    style: {
      width: '100%',
      height: '100%',
      border: 0,
      outline: 0,
      resize: 'none',
      background: 'transparent',
      padding: 0,
      font: '400 16px/1.4 var(--font-sans)',
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      caretColor: 'var(--grey-550)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Send",
    onClick: submit,
    style: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      padding: 12,
      borderRadius: 100,
      background: 'var(--black)',
      border: '1px solid var(--border-button-dark)',
      boxShadow: 'var(--shadow-send)',
      display: 'flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--white)"
  })));
}
Object.assign(__ds_scope, { PromptBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PromptBox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Home page — recreated from nexura-theme/index.html section by section.
function HomeHero({
  onNav
}) {
  const {
    Button,
    PromptBox,
    CursorChip,
    FrameLines
  } = NXK;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 800,
      maxHeight: 1024,
      padding: '0 20px 24px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      maxWidth: 1250,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(' + A + 'patterns/pattern-grid.svg) left top / 126px repeat',
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement(FrameLines, {
    top: false,
    bottom: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      paddingTop: 170,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "nx-h1",
    style: {
      maxWidth: 560
    }
  }, "Scale faster with your AI Agent"), /*#__PURE__*/React.createElement("p", {
    className: "nx-body-lg",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 520
    }
  }, "Spend less time on logistics and more on strategy while Nexura handles the execution of your global marketing operations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('Pricing')
  }, "Start for free"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav('Contact')
  }, "Talk to sales"))), /*#__PURE__*/React.createElement("img", {
    src: A + 'illustrations/hero-landscape.png',
    alt: "Serene Rural Landscape with Couple",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '48%',
      objectFit: 'cover',
      objectPosition: 'bottom'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(PromptBox, null)), /*#__PURE__*/React.createElement(CursorChip, {
    name: "Aaron",
    color: "amber",
    style: {
      position: 'absolute',
      right: '20%',
      top: '52%',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement(CursorChip, {
    name: "Sarah",
    color: "blue",
    style: {
      position: 'absolute',
      left: '22%',
      top: '58%',
      zIndex: 2
    }
  })));
}
function HomeLogos() {
  const {
    LogoStrip
  } = NXK;
  return /*#__PURE__*/React.createElement(KitSection, {
    pad: "48px 64px"
  }, /*#__PURE__*/React.createElement(LogoStrip, {
    height: 30,
    logos: ['codecraft', 'coreos', 'mastermail', 'pictelai', 'acme-corp', 'launchsimple', '45-degrees', 'convergence'].map(l => A + 'logos/' + l + '.png')
  }));
}
const HOME_FEATURES = [{
  icon: 'user-sound',
  title: 'Conversational AI Agent',
  d: 'Ask Nexura anything about your performance. Get data-backed recommendations instantly.',
  img: 'ui-insights.png'
}, {
  icon: 'target',
  title: 'Campaign Tracking',
  d: "Monitor ROI, conversions, and spend across every channel in real time. Spot what's working and cut what isn't.",
  img: 'ui-campaigns.png'
}, {
  icon: 'chart-bar',
  title: 'Unified Dashboard',
  d: 'See your entire marketing operation from one central view. KPIs, trends, and activity feeds all live in one place.',
  img: 'ui-overview.png'
}, {
  icon: 'path',
  title: 'Automated Workflow',
  d: 'Design and deploy multi-step agent journeys. Configure how Nexura thinks, acts, and reports — entirely on your terms.',
  img: 'ui-workflows.png'
}];
function HomeFeatures() {
  const {
    FeatureTab,
    Divider
  } = NXK;
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "product"
  }, /*#__PURE__*/React.createElement("p", {
    className: "nx-h3",
    style: {
      maxWidth: 900,
      textWrap: 'pretty'
    }
  }, "Marketing at full intelligence. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "Stop guessing, start growing \u2014 Nexura analyzes your data and delivers insights that actually move the needle.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '58%',
      height: 450,
      background: 'var(--surface-muted)',
      overflow: 'hidden',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '32px 0 0 32px',
      padding: 4,
      background: 'var(--white)',
      borderTopLeftRadius: 12,
      boxShadow: 'var(--shadow-ui-window)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'ui/' + HOME_FEATURES[i].img,
    alt: "Sample UI",
    style: {
      width: 900,
      display: 'block',
      borderTopLeftRadius: 10
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      flex: 1
    }
  }, HOME_FEATURES.map((f, k) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: f.title
  }, k ? /*#__PURE__*/React.createElement(Divider, null) : null, /*#__PURE__*/React.createElement(FeatureTab, {
    icon: f.icon,
    title: f.title,
    description: f.d,
    open: i === k,
    onClick: () => setI(k)
  }))))));
}
function HomeDemo() {
  const {
    Icon
  } = NXK;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "demo",
    pad: "0 64px 100px",
    frame: false,
    innerStyle: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1032,
      maxWidth: '100%',
      padding: 8,
      background: 'var(--white)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-video)',
      position: 'relative',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'ui/demo-thumbnail.webp',
    alt: "",
    style: {
      width: '100%',
      display: 'block',
      borderRadius: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 64,
      height: 64,
      borderRadius: 100,
      background: 'var(--black)',
      boxShadow: 'var(--shadow-play)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 24,
    color: "var(--white)"
  }))));
}
function HomeIntegration({
  onNav
}) {
  const {
    SectionHeader,
    StepItem,
    Divider,
    Button
  } = NXK;
  const spots = [[50, 9], [80, 22], [92, 50], [80, 78], [50, 91], [20, 78], [8, 50], [20, 22]];
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "integration"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "left",
    title: "Connects with your existing stack.",
    description: "Nexura plugs into the tools your team already uses \u2014 no migration required."
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StepItem, {
    number: 1
  }, "Explore 50+ supported integrations"), /*#__PURE__*/React.createElement(StepItem, {
    number: 2
  }, "Securely link your account"), /*#__PURE__*/React.createElement(StepItem, {
    number: 3
  }, "Sync and streamline your workflow"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1.2,
      height: 450,
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(' + A + 'patterns/pattern-grid.svg) center / 126px repeat',
      opacity: 0.06
    }
  }), spots.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'absolute',
      left: s[0] + '%',
      top: s[1] + '%',
      transform: 'translate(-50%,-50%)',
      width: 70,
      height: 70,
      borderRadius: 40,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-logo-tile)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'integrations/orbit-' + (k + 1) + '.png',
    alt: "",
    style: {
      width: 36,
      height: 36,
      objectFit: 'contain'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('Integration')
  }, "Explore all integrations")))));
}
const HOME_SOLUTIONS = {
  'For marketing team': {
    t: 'Stop manually pulling reports across platforms.',
    d: 'Nexura connects to your ad channels and surfaces exactly where your budget is working hardest.'
  },
  'For startup': {
    t: 'Do more with a lean marketing team.',
    d: 'Set your workflows once and let Nexura run your campaigns continuously in the background.'
  },
  'For agency': {
    t: 'Manage every client from one intelligent platform.',
    d: 'Deliver AI-powered recommendations and scheduled reports without the manual overhead.'
  }
};
function HomeSolutions() {
  const {
    SectionHeader,
    FilterTabs,
    NotificationBanner,
    FlowCard,
    Tag
  } = NXK;
  const [s, setS] = React.useState('For marketing team');
  const sol = HOME_SOLUTIONS[s];
  return /*#__PURE__*/React.createElement(KitSection, {
    innerStyle: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Built for every marketing team.",
    description: "Whether you're a solo marketer or a full-service agency, Nexura adapts to the way you work."
  }), /*#__PURE__*/React.createElement(FilterTabs, {
    items: Object.keys(HOME_SOLUTIONS),
    value: s,
    onChange: setS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, s), /*#__PURE__*/React.createElement("h4", {
    className: "nx-h4"
  }, sol.t), /*#__PURE__*/React.createElement("p", {
    className: "nx-body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, sol.d)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.3,
      height: 400,
      background: 'var(--surface-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, s === 'For marketing team' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(NotificationBanner, {
    icon: "meta-logo",
    tint: "purple",
    title: "Meta Ads",
    subtitle: "3 campaigns currently active"
  }), /*#__PURE__*/React.createElement(NotificationBanner, {
    icon: "google-logo",
    tint: "sky",
    title: "Google Ads",
    subtitle: "142 clicks tracked today"
  }), /*#__PURE__*/React.createElement(NotificationBanner, {
    icon: "target",
    tint: "yellow",
    title: "ROI Score",
    subtitle: "4.2x return this week"
  }), /*#__PURE__*/React.createElement(NotificationBanner, {
    icon: "money",
    tint: "purple",
    title: "Budget Alert",
    subtitle: "15% remaining on Q1 spend"
  })) : s === 'For startup' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(FlowCard, {
    title: "Data Intake",
    pill: "Input",
    description: "Collects and parses user data"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 48,
      borderLeft: '1px dashed var(--grey-500)'
    }
  }), /*#__PURE__*/React.createElement(FlowCard, {
    title: "Report",
    pill: "Output",
    description: "Delivers insights and next steps"
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: 24,
      width: '100%'
    }
  }, [['Ads Channels', 'April 2026', 'chart-donut.png'], ['Conversion Trend', 'Last 6 months', 'chart-line.png']].map(c => /*#__PURE__*/React.createElement("div", {
    key: c[0],
    style: {
      background: 'var(--white)',
      borderRadius: 12,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nx-body-strong"
  }, c[0]), /*#__PURE__*/React.createElement("div", {
    className: "nx-small",
    style: {
      color: 'var(--text-secondary)'
    }
  }, c[1])), /*#__PURE__*/React.createElement("img", {
    src: A + 'ui/' + c[2],
    alt: "Chart UI",
    style: {
      width: '100%',
      height: 150,
      objectFit: 'contain'
    }
  })))))));
}
const HOME_TESTIMONIALS = [{
  q: '"Nexura cut our reporting time in half. We now spend that time actually optimizing campaigns instead."',
  a: 'Sarah Chen, Head of Growth at Codecraft',
  p: 'person-1.png'
}, {
  q: '"Nexura flagged three underperforming campaigns in seconds. That insight alone made it a no-brainer."',
  a: 'Emma Hartley, Marketing Lead at Acme',
  p: 'person-4.png'
}, {
  q: '"Switching to Nexura was the easiest decision we made this quarter. Our ROAS improved by 30% in the first month alone."',
  a: 'Claire Donovan, Marketing Lead at LaunchSimple',
  p: 'person-3.png'
}, {
  q: '"We manage 12 client accounts and Nexura keeps everything in one place. It\'s like an extra team member."',
  a: 'James Walker, Founder at PictelAI',
  p: 'person-2.png'
}];
function HomeTestimonials() {
  const {
    SectionHeader,
    TestimonialCard
  } = NXK;
  const [o, setO] = React.useState(0);
  return /*#__PURE__*/React.createElement(KitSection, {
    innerStyle: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Loved by teams worldwide.",
    description: "From lean startups to global agencies, here's what our users have to say."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      width: '100%'
    }
  }, HOME_TESTIMONIALS.map((t, k) => /*#__PURE__*/React.createElement(TestimonialCard, {
    key: k,
    open: o === k,
    onClick: () => setO(k),
    quote: t.q,
    author: t.a,
    photo: A + 'photos/' + t.p
  }))));
}
function PricingBlock({
  title = 'Choose your plan.',
  description = 'Start free and scale as your team grows. No hidden fees, no surprises.',
  as = 'h2',
  pad
}) {
  const {
    SectionHeader,
    SegmentedToggle,
    PricingCard
  } = NXK;
  const [p, setP] = React.useState('Monthly');
  const y = p === 'Yearly';
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "pricing",
    pad: pad,
    innerStyle: {
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    as: as,
    title: title,
    description: description
  }), /*#__PURE__*/React.createElement(SegmentedToggle, {
    value: p,
    onChange: setP
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Starter",
    price: "Free",
    priceLabel: "Forever",
    cta: "Start for free",
    description: "For solo marketers getting started",
    features: ['1 active campaign', 'Basic performance dashboard', '50 AI tokens per month', 'Weekly automated reports']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Pro",
    price: y ? 36 : 49,
    priceLabel: y ? 'Per month, billed yearly' : 'Per month, billed monthly',
    cta: "Continue with Pro",
    highlighted: true,
    badge: "Most Popular",
    description: "For growing teams",
    features: ['Unlimited active campaigns', 'Full analytics dashboard', '150 AI tokens per month', 'Custom workflow builder']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Agency",
    price: y ? 109 : 149,
    priceLabel: y ? 'Per month, billed yearly' : 'Per month, billed monthly',
    cta: "Continue with Agency",
    description: "For agencies managing clients",
    features: ['Everything in Pro', 'Up to 15 client accounts', 'Multi-account dashboard', 'White-label report exports']
  })));
}
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HomeHero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(HomeLogos, null), /*#__PURE__*/React.createElement(HomeFeatures, null), /*#__PURE__*/React.createElement(HomeDemo, null), /*#__PURE__*/React.createElement(HomeIntegration, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(HomeSolutions, null), /*#__PURE__*/React.createElement(HomeTestimonials, null), /*#__PURE__*/React.createElement(PricingBlock, null), /*#__PURE__*/React.createElement(KitCta, {
    onNav: onNav
  }));
}
Object.assign(window, {
  HomePage,
  PricingBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
// Secondary pages: Pricing, Integration, Blog, Contact.
function PricingPage({
  onNav
}) {
  const rows = [['Campaign', null], ['Active campaigns', ['1', 'Unlimited', 'Unlimited']], ['Campaign channels', ['1', 'Up to 5', 'Unlimited']], ['Performance dashboard', ['Basic', 'Full', 'Full']], ['Scheduled reports', ['Weekly', 'Daily', 'Custom']], ['AI Agent', null], ['AI chat queries', ['50 / month', '150 / month', 'Unlimited']], ['Workflow builder', ['—', '✓', '✓']], ['Agent configuration', ['—', '✓', '✓']], ['Workspace', null], ['Team members', ['1', 'Up to 5', 'Unlimited']], ['Client accounts', ['—', '—', 'Up to 15']]];
  const {
    SectionHeader,
    Button
  } = NXK;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PricingBlock, {
    as: "h1",
    title: "Find the right plan for your team.",
    description: "Whether you're just starting out or managing multiple clients, Nexura has a plan that fits.",
    pad: "140px 64px 100px"
  }), /*#__PURE__*/React.createElement(KitSection, {
    innerStyle: {
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Compare plans side by side.",
    description: "See exactly what's included in each plan and find the right fit for your team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 0,
      position: 'sticky',
      top: 73,
      background: 'var(--white)',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null), [['Free Plan', 'Free', 'Start for free'], ['Pro Plan', 'Start from $49/mo', 'Get Started'], ['Agency Plan', 'Start from $149/mo', 'Get Started']].map((p, k) => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      background: k === 1 ? 'var(--surface-card)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nx-h6"
  }, p[0]), /*#__PURE__*/React.createElement("div", {
    className: "nx-small",
    style: {
      color: 'var(--text-secondary)'
    }
  }, p[1])), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: k === 1 ? 'filled' : 'outline',
    onClick: () => onNav('Contact')
  }, p[2])))), rows.map(r => r[1] === null ? /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "nx-body-strong",
    style: {
      padding: '28px 16px 12px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, r[0]) : /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      borderBottom: '1px dashed var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nx-body",
    style: {
      padding: 16,
      color: 'var(--text-secondary)'
    }
  }, r[0]), r[1].map((c, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "nx-body",
    style: {
      padding: 16,
      background: k === 1 ? 'var(--surface-card)' : 'transparent'
    }
  }, c)))))), /*#__PURE__*/React.createElement(KitCta, {
    onNav: onNav
  }));
}
const KIT_INTEGRATIONS = [['Zapier', 'zapier.svg', 'Automation', 'Connect Nexura agents to 6,000+ apps with no-code workflows.'], ['OpenAI', 'openai.png', 'Automation', 'Power your agents with GPT models for reasoning and decision-making.'], ['Make', 'make.png', 'Automation', 'Build visual automation scenarios triggered by your AI agents.'], ['n8n', 'n8n.webp', 'Automation', 'Self-hosted workflow automation for full control over agent pipelines.'], ['Google Analytics', 'google-analytics.png', 'Analytics', 'Track agent-driven user journeys and conversion events automatically.'], ['Amplitude', 'amplitude.webp', 'Analytics', 'Surface behavioral insights from every agent interaction in real time.'], ['Mixpanel', 'mixpanel.png', 'Analytics', 'Analyze how users engage with AI agent touchpoints across your product.'], ['Intercom', 'intercom.svg', 'Automation', 'Hand off AI agent conversations to live support reps without friction.'], ['Twilio', 'twilio.svg', 'Automation', 'Trigger SMS or voice responses from your agents based on user actions.'], ['Auth0', 'auth0.png', 'Data & Storage', 'Secure agent access with enterprise-grade authentication and user management.'], ['Airtable', 'airtable.webp', 'Data & Storage', 'Log agent outputs and structured data into flexible, shareable bases.'], ['Notion', 'notion.png', 'Data & Storage', 'Auto-populate Notion databases with summaries and agent task results.']];
function IntegrationPage({
  onNav
}) {
  const {
    FilterTabs,
    IntegrationCard
  } = NXK;
  const [c, setC] = React.useState('All');
  const list = KIT_INTEGRATIONS.filter(i => c === 'All' || i[2] === c);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KitPageHeader, {
    eyebrow: "Integration",
    title: "Connect to the tools you already use.",
    description: "Seamlessly integrate your AI agents with your favorite platforms \u2014 no complex setup, no switching tabs."
  }), /*#__PURE__*/React.createElement(KitSection, {
    pad: "40px 64px 100px",
    frame: false,
    innerStyle: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(FilterTabs, {
    items: ['All', 'Data & Storage', 'Automation', 'Analytics'],
    value: c,
    onChange: setC
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 16
    }
  }, list.map(i => /*#__PURE__*/React.createElement(IntegrationCard, {
    key: i[0],
    logo: A + 'integrations/' + i[1],
    name: i[0],
    description: i[3]
  })))), /*#__PURE__*/React.createElement(KitCta, {
    onNav: onNav
  }));
}
const KIT_POSTS = [['landscape-scene.png', 'AI & Automation', 'Apr 2026', 'How AI agents are changing the way we work', "Marketing is evolving fast — and AI agents are at the center of it. Here's what that shift looks like in practice.", 'Marcus Reid, Head of Content'], ['man-typing.png', 'AI & Automation', 'Apr 2026', 'The difference between AI automation and AI agents', 'Understanding AI automation and AI agents can change how you build your marketing stack.', 'Priya Nair, Product Educator'], ['outdoor-seating.png', 'Product & Features', 'Apr 2026', 'Getting started with Nexura: what to set up first', 'New to Nexura? This guide walks you through the first steps to get value as quickly as possible.', 'Marcus Reid, Head of Content'], ['sunlit-kitchen.png', 'Product & Features', 'Mar 2026', "A closer look at Nexura's workflow engine", "Behind every smooth campaign is a system doing a lot of heavy lifting. Here's how Nexura's automation engine works.", 'James Okafor, Product Manager'], ['suburban-house.png', 'Marketing Strategy', 'Feb 2026', 'Understanding digital marketing in the age of AI', 'Reaching the right person at the right time used to be guesswork. Intent data and AI are making it a science.', 'Lena Park, Demand Generation Lead'], ['woman-working.png', 'Marketing Strategy', 'Jan 2026', 'How to build a content strategy that actually scales', "Most content strategies break down as teams grow. Here's how to build one designed for scale from the start.", 'Sofia Mendes, Content Strategist']];
function BlogPage({
  onNav
}) {
  const {
    FilterTabs,
    BlogCard
  } = NXK;
  const [c, setC] = React.useState('All');
  const list = KIT_POSTS.filter(p => c === 'All' || p[1] === c);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KitPageHeader, {
    eyebrow: "Blog",
    title: "Ideas, insights, and updates from Nexura.",
    description: "Deep dives into AI, automation, and modern marketing strategy. Everything you need to stay sharp and move faster."
  }), /*#__PURE__*/React.createElement(KitSection, {
    pad: "40px 64px 100px",
    frame: false,
    innerStyle: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(FilterTabs, {
    items: ['All', 'Product & Features', 'AI & Automation', 'Marketing Strategy'],
    value: c,
    onChange: setC
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 16
    }
  }, list.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p[3],
    image: A + 'blog/' + p[0],
    category: p[1],
    date: p[2],
    title: p[3],
    excerpt: p[4],
    author: p[5]
  })))));
}
const KIT_CONTACT_FAQ = [['Can I switch plans or cancel anytime?', 'Absolutely. All plans are flexible with no long-term contracts. You can upgrade, downgrade, or cancel at any time.'], ['Do you offer custom or enterprise pricing?', "Yes. If your team has specific needs, reach out via the form or book a call with sales and we'll put together a custom plan."], ['How quickly will I hear back after submitting the form?', 'We typically respond within 1 business day. For urgent inquiries, feel free to email us directly.'], ['What kind of support is included with my plan?', 'All plans include access to our help center and email support. Pro and Enterprise plans get priority support and a dedicated account manager.'], ['Can I integrate Nexura with my marketing tools?', 'Yes — Nexura connects with a wide range of tools including CRMs, email platforms, and analytics software. Check our integrations page for the full list.']];
function ContactPage() {
  const {
    TextField,
    SelectField,
    Button,
    Icon,
    SectionHeader,
    FaqItem
  } = NXK;
  const [sent, setSent] = React.useState(false);
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KitPageHeader, {
    eyebrow: "Contact",
    title: "Start the conversation. We're ready to help.",
    description: "Let's talk about what intelligent automation can do for your business. Tell us where you're at and we'll figure out the rest."
  }), /*#__PURE__*/React.createElement(KitSection, {
    pad: "0 64px 64px",
    frame: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 64,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'illustrations/contact-landscape.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'bottom'
    }
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      position: 'relative',
      width: 520,
      background: 'var(--surface-card)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nx-h5"
  }, "Thanks \u2014 message sent."), /*#__PURE__*/React.createElement("div", {
    className: "nx-body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "We'll get back to you within 24 hours.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    placeholder: "Jane Smith",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    placeholder: "jane@company.com",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement(SelectField, {
    label: "What best describes you?",
    options: ['Marketing Agency', 'In-house Marketing Team', 'AI Consultant', 'Startup Founder', 'Other']
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: "Where are you in your journey?",
    options: ['Just researching', 'Evaluating tools / comparing options', 'Already have a solution, looking to switch']
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Anything else you'd like us to know?",
    placeholder: "Enter your message",
    multiline: true,
    rows: 4
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true
  }, "Send message")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, [['envelope-open', 'Email us', "Got a question? We'll get back to you within 24 hours.", 'hello@nexura.ai'], ['x-logo', 'Join the community', 'Stay up to date with product news, tips, and updates.', 'Follow us on X'], ['phone-call', 'Talk to sales', 'Prefer to talk it out? Our team is available Mon–Fri, 9am–6pm.', '+1 (800) 123-4567']].map(c => /*#__PURE__*/React.createElement("div", {
    key: c[1],
    style: {
      background: 'var(--surface-card)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c[0]
  }), /*#__PURE__*/React.createElement("div", {
    className: "nx-h6"
  }, c[1]), /*#__PURE__*/React.createElement("div", {
    className: "nx-body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, c[2]), /*#__PURE__*/React.createElement("div", {
    className: "nx-body-strong"
  }, c[3]))))), /*#__PURE__*/React.createElement(KitSection, {
    bg: "var(--surface-card)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "left",
    title: "You might find your answer here.",
    description: "Everything you need to know before reaching out.",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.2,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, KIT_CONTACT_FAQ.map((f, k) => /*#__PURE__*/React.createElement(FaqItem, {
    key: k,
    question: f[0],
    answer: f[1],
    open: open === k,
    onToggle: () => setOpen(open === k ? -1 : k)
  }))))));
}
Object.assign(window, {
  PricingPage,
  IntegrationPage,
  BlogPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Shared layout pieces for the Nexura website kit.
const NXK = window.NexuraDesignSystem_19251d;
const A = '../../assets/';
function KitSection({
  children,
  pad = '100px 64px',
  bg,
  frame = true,
  bottom = false,
  id,
  style,
  innerStyle
}) {
  const {
    FrameLines
  } = NXK;
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: Object.assign({
      display: 'flex',
      justifyContent: 'center',
      padding: '0 20px',
      background: bg || 'transparent',
      position: 'relative'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      position: 'relative',
      flex: 1,
      maxWidth: 1250,
      padding: pad,
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }, innerStyle)
  }, frame ? /*#__PURE__*/React.createElement(FrameLines, {
    top: true,
    bottom: bottom
  }) : null, children));
}
function KitPageHeader({
  eyebrow,
  title,
  description
}) {
  const {
    SectionHeader
  } = NXK;
  return /*#__PURE__*/React.createElement(KitSection, {
    pad: "140px 64px 64px",
    innerStyle: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(' + A + 'patterns/pattern-grid.svg) left top / 126px repeat',
      opacity: 0.06,
      WebkitMask: 'linear-gradient(#000, transparent 85%)',
      mask: 'linear-gradient(#000, transparent 85%)'
    }
  }), /*#__PURE__*/React.createElement(SectionHeader, {
    as: "h1",
    eyebrow: eyebrow,
    title: title,
    description: description,
    style: {
      maxWidth: 720,
      position: 'relative'
    }
  }));
}
function KitCta({
  onNav
}) {
  const {
    SectionHeader,
    Button
  } = NXK;
  return /*#__PURE__*/React.createElement(KitSection, {
    pad: "100px 64px 0",
    innerStyle: {
      alignItems: 'center',
      overflow: 'hidden',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Your best-performing campaign starts here.",
    description: "Set up in minutes. See results from day one."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav && onNav('Pricing')
  }, "Start for free"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav && onNav('Contact')
  }, "Talk to sales")), /*#__PURE__*/React.createElement("img", {
    src: A + 'illustrations/cta-village.png',
    alt: "",
    style: {
      width: 'calc(100% + 128px)',
      margin: '0 -64px',
      display: 'block'
    }
  }));
}
Object.assign(window, {
  KitSection,
  KitPageHeader,
  KitCta,
  NXK,
  A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FrameLines = __ds_scope.FrameLines;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.FeatureTab = __ds_scope.FeatureTab;

__ds_ns.IntegrationCard = __ds_scope.IntegrationCard;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.SegmentedToggle = __ds_scope.SegmentedToggle;

__ds_ns.ChatMessage = __ds_scope.ChatMessage;

__ds_ns.CursorChip = __ds_scope.CursorChip;

__ds_ns.FlowCard = __ds_scope.FlowCard;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.NotificationBanner = __ds_scope.NotificationBanner;

__ds_ns.PromptBox = __ds_scope.PromptBox;

})();
