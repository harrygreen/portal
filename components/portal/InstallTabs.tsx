import {
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useClipboard,
} from "@chakra-ui/react";
import { FiCheckSquare, FiCopy } from "react-icons/fi";

export const InstallTabs = () => {
  const { onCopy: onCopyJavaScript, hasCopied: hasCopiedJavaScript } =
    useClipboard("npm install @thirdweb-dev/sdk");
  const { onCopy: onCopyReact, hasCopied: hasCopiedReact } = useClipboard(
    "npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers",
  );
  const { onCopy: onCopyPython, hasCopied: hasCopiedPython } = useClipboard(
    "pip install thirdweb-sdk",
  );

  return (
    <Tabs variant="line" bg="gray.50" borderRadius="xl">
      <TabList>
        <Tab fontWeight="600" color="gray.500">
          JavaScript
        </Tab>
        <Tab fontWeight="600" color="gray.500">
          React
        </Tab>
        <Tab fontWeight="600" color="gray.500">
          Python
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel display="flex" justifyContent="space-between">
          <code>npm install @thirdweb-dev/sdk</code>
          <Icon
            boxSize={5}
            cursor="pointer"
            as={hasCopiedJavaScript ? FiCheckSquare : FiCopy}
            onClick={onCopyJavaScript}
          />
        </TabPanel>
        <TabPanel display="flex" justifyContent="space-between">
          <code>npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers</code>
          <Icon
            boxSize={5}
            cursor="pointer"
            as={hasCopiedReact ? FiCheckSquare : FiCopy}
            onClick={onCopyReact}
          />
        </TabPanel>
        <TabPanel display="flex" justifyContent="space-between">
          <code>pip install thirdweb-sdk</code>
          <Icon
            boxSize={5}
            cursor="pointer"
            as={hasCopiedPython ? FiCheckSquare : FiCopy}
            onClick={onCopyPython}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
