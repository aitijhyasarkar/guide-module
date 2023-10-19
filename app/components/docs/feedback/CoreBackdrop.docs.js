import {
    CoreH4,
    CoreTypographyBody1,
    CoreDivider,
    CoreBackdrop,
    CoreStack,
    CoreTypographyButton,
    CoreCircularProgress
    // CoreBackdropTitle
  } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
import React from "react";

  export default function CoreBackdropDocs(){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
        <>
        <CoreBackdrop severity="warning">CoreBackdrop in not implemented in mobile</CoreBackdrop>

        <CoreH4>CoreBackdrop</CoreH4>
        <CoreStack direction="column" spacing={2}>
        <CoreTypographyBody1>
        The Backdrop component narrows the user's focus to a particular element on the screen.
        </CoreTypographyBody1>
        <CoreTypographyBody1>
        The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more. In its simplest form, the Backdrop component will add a dimmed layer over your application.
        </CoreTypographyBody1>
        </CoreStack>

        <CodeSample
        title={"Basic alerts"}
        description={"The CoreBackdrop offers four severity levels that set a distinctive icon and color"}
        code={`const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
};
const handleOpen = () => {
    setOpen(true);
};
return (
<>
<CoreTypographyButton onClick={handleOpen}>Show backdrop</CoreTypographyButton>
<CoreBackdrop
open={open}
onClick={handleClose}
>
<CoreCircularProgress color="inherit" />
</CoreBackdrop>
</>
)`}
        renderElement={
            
      <CoreStack direction="column" spacing={2}>
            <CoreTypographyButton onClick={handleOpen}>Show backdrop</CoreTypographyButton>
            <CoreBackdrop
            open={open}
            onClick={handleClose}
            >
            <CoreCircularProgress color="inherit" />
            </CoreBackdrop>
            </CoreStack>

        }
        />
        <CoreDivider/>
      <ComponentProps component={CoreBackdrop} />
        </>
    )
  }
