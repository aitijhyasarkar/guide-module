import {
  CoreH4,
  CoreSnackbar,
  CoreTypographyBody1,
  // CoreSnackbar
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreSnackbarDocs() {
  return (
    <>
      <CoreH4>{"CoreSnackbar (NOT DEFINED)"}</CoreH4>

      <CoreTypographyBody1>
        Snackbars provide brief notifications. The component is also known as a
        toast.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Snackbars inform users of a process that an app has performed or will
        perform. They appear temporarily, towards the bottom of the screen. They
        shouldn't interrupt the user experience, and they don't require user
        input to disappear.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Snackbars contain a single line of text directly related to the
        operation performed. They may contain a text action, but no icons. You
        can use them to display notifications.
      </CoreTypographyBody1>

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Simple snackbars(NOT WORKING)"}
        description={
          "A basic snackbar that aims to reproduce Google Keep's snackbar behavior."
        }
        code={`
<CoreButton onClick={handleClick}>Open simple snackbar</CoreButton>

    <CoreSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={action}
      />
        
        `}
        renderElement={<></>}
      />

      <CodeSample
        title={"Customization (NOT WORKING)"}
        description={
          "Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Positioned snackbars(NOT WORKING)"}
        description={
          "In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the anchorOrigin prop."
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Message Length (NOT WORKING)"}
        description={"Some snackbars with varying message length."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Transitions (NOT WORKING)"}
        description={
          "Consecutive Snackbars\
        When multiple snackbar updates are necessary, they should appear one at a time.   "
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Snackbars and floating action buttons (FABs)(NOT WORKING)"}
        description={"Snackbars should appear above FABs (on mobile)."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Change transition (NOT WORKING)"}
        description={
          "Grow is the default transition but you can use a different one."
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Control Slide direction (NOT WORKING)"}
        description={
          "You can change the direction of the Slide transition.\
        Example of making the slide transition to the left:"
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Complementary projects (NOT WORKING)"}
        description={`For more advanced use cases you might be able to take advantage of:
notistack
This example demonstrates how to use notistack. notistack has an imperative API that makes it easy to display snackbars, without having to handle their open/close state. It also enables you to stack them on top of one another (although this is discouraged by the Material Design guidelines).
        `}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Accessibility (NOT WORKING)"}
        description={`By default, the snackbar won't auto-hide. However, if you decide to use the autoHideDuration prop, it's recommended to give the user sufficient time to respond.
        When open, every Snackbar will be dismissed if Escape is pressed. Unless you don't handle onClose with the "escapeKeyDown" reason. If you want to limit this behavior to only dismiss the oldest currently open Snackbar call event.preventDefault in onClose.
        `}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreSnackbar} />
    </>
  );
}
