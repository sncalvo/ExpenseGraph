import { createContext, useEffect, useMemo, useState } from 'react';

import { createWorker, RecognizeResult, Worker } from 'tesseract.js';

interface RecognitionContextProps {
  recognition: Worker | null;
  setFile: (file: File) => void;
  recognized: RecognizeResult | null;
  loading: boolean;
}

const RecognitionContext = createContext<RecognitionContextProps>({
  recognition: null,
  setFile: () => {},
  recognized: null,
  loading: false,
});

const RecognitionProvider = ({ children }: { children: React.ReactNode }) => {
  const recognition = useMemo(() => {
    const worker = createWorker();

    return worker;
  }, []);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!recognition) {
      return;
    }

    setLoading(true);

    recognition.load().then(() => {
      recognition.loadLanguage('spa').then(() => {
        recognition.initialize('spa').then(() => {
          setLoading(false);
        });
      });
    });

    return () => {
      recognition.terminate();
    };
  }, [recognition]);

  const [recognized, setRecognized] = useState<RecognizeResult | null>(null);

  useEffect(() => {
    if (!recognition || !file) {
      return;
    }

    recognition.recognize(file).then((result) => {
      console.log(result.data);
      setRecognized(result);
    });
  }, [recognition, file]);

  return (
    <RecognitionContext.Provider
      value={{
        recognition,
        setFile,
        recognized,
        loading,
      }}
    >
      {children}
    </RecognitionContext.Provider>
  );
};

export { RecognitionContext, RecognitionProvider };
