import React, { MouseEventHandler, ReactElement, ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { Button } from './ui/button';
import {
  DownloadIcon,
  ExpandIcon,
  SearchIcon,
  Share2Icon,
  ShrinkIcon,
  Wand,
} from 'lucide-react';
import { Separator } from './ui/separator';

export default function BottomToolBar({
  isFullScreen,
  downloadFile,
  toggleFullScreen,
}: {
  isFullScreen: boolean;
  downloadFile: () => void;
  toggleFullScreen: () => void;
}) {
  const [openSearch, setOpenSearch] = React.useState(false);

  return (
    <TooltipProvider>
      <div className="fixed flex left-[50%] bottom-5 z-50 w-lg rounded-full translate-x-[-50%] translate-y-[-10%] gap-4 bg-[#02061780] border border-line shadow-lg p-2 backdrop-blur-[10px]">
        <div className="flex ">
          <Option
            Icon={SearchIcon}
            onClick={() => setOpenSearch((prev) => !prev)}
            text="Search"
          />
        </div>
        {openSearch ? (
          <div
            className={`flex items-center transition-all duration-500 ease-in-out ${
              openSearch
                ? 'transform translate-x-0'
                : 'transform translate-x-full'
            }`}
          >
            <input
              type="text"
              className="w-full p-2 rounded-full border border-line shadow-lg backdrop-blur-[10px]"
              placeholder="Search..."
            />
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <Separator
                className="h-[50%] flex justify-center items-center"
                orientation="vertical"
              />
            </div>
            <div className="flex ">
              <Option
                Icon={DownloadIcon}
                onClick={downloadFile}
                text="Download"
              />
              <Option Icon={Share2Icon} onClick={() => {}} text="Share" />
              <Option
                Icon={isFullScreen ? ShrinkIcon : ExpandIcon}
                onClick={toggleFullScreen}
                text={isFullScreen ? 'Minimize' : 'Maximize'}
              />
            </div>
            <div className="flex justify-center items-center">
              <Separator
                className="h-[50%] flex justify-center items-center"
                orientation="vertical"
              />
            </div>
            <div className="flex ">
              <Option Icon={Wand} onClick={() => {}} text="AI" />
            </div>
          </>
        )}
      </div>
    </TooltipProvider>
  );
}

interface OptionProps {
  Icon: (props: any) => ReactElement;
  iconProps?: Record<string, unknown>;
  text: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Option({ Icon, iconProps, text, onClick }: OptionProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={onClick}
          className="rounded-full h-12 w-12 flex justify-center items-center"
          variant={'ghost'}
        >
          <Icon className="w-12 h-12" {...iconProps} />
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={5} align="center">
        {text}
      </TooltipContent>
    </Tooltip>
  );
}
