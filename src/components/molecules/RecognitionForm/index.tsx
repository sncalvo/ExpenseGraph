import { Button, FileInput, Form } from '@atoms';
import { useRecognitionContext } from '@hooks';

const RecognitionForm = () => {
  const { loading, recognized, setFile } = useRecognitionContext();

  console.log(recognized);

  return (
    <div>
      <Form
        onSubmit={(data) => {
          console.log(data);
          const files = (data as { file: FileList }).file;

          if (files && files.length > 0) {
            setFile(files[0]);
          }
        }}
      >
        {loading && <p>Loading...</p>}
        <FileInput name="file" />

        <Button type="submit">Submit</Button>
      </Form>

      {recognized && (
        <div>
          {recognized.data.paragraphs.map((paragraph) =>
            paragraph.lines.map((line) => <p key={line.text}>{line.text}</p>)
          )}
        </div>
      )}
    </div>
  );
};

export default RecognitionForm;
