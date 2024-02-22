import * as comps from '../dynamicComps'

export const DynamicComponent = ({ componentName, ...props }) => {
  const comp = componentName+props.navbarType

  const UtilComp = comps[comp];

  if (!UtilComp) {
    return <div>Invalid Component type</div>;
  }
  return <UtilComp {...props} />;
};