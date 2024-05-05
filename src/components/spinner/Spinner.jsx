import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Spinner() {
  return (
    <div className="h-[calc(100vh-95px)] flex items-center justify-center">
      <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[50px]" />
    </div>
  );
}
