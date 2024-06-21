import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Exports"
import { useThemeContext } from "../../context/ThemeContext";
import { ChevronLeft, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { FormData } from "./Types";
import { db } from '../../../utils/index'
import { TopIdeas } from '../../../utils/Schema'

const NewIdea = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    idea: "",
  });

  const [errors, setErrors] = useState<FormData>({
    username: "",
    idea: "",
  });

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    show: false
  });

  const [savedUser, setSavedUser] = useState<string | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem('username');
    setSavedUser(localUser);
    formData.username = `${localUser}`
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handling the save of the ideas of startup
  const onSaveHandler = async () => {
    console.log(errors);
    const results = await db
      .insert(TopIdeas)
      .values({
        content: formData.idea,
        username: formData.username,
      })
      .returning({ id: TopIdeas.id });

    if (results) {
      localStorage.setItem("username", formData.username);
      setAlertMessage({
        show: true,
        message: "Your Idea Added Successfully!",
      });
      setTimeout(() => {
        setAlertMessage({
          show: false,
          message: "",
        });
      }, 6000);
    }
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, idea } = formData;

    // Validation logic
    let isValid = true;
    let errors = { username: "", idea: "" };

    if (username.trim() === "" && username.length < 3) {
      errors.username = "Username is required";
      alert(errors);
      isValid = false;
    }

    if (idea.trim() === "" && idea.length < 10) {
      errors.idea = "Idea is required";
      isValid = false;
      alert(errors);
    }

    setErrors(errors);

    if (isValid) {
      onSaveHandler();
      setFormData({
        idea: "",
        username: "",
      });
    }
  };

  const { theme } = useThemeContext();
  return (
    <div data-theme={theme} className="w-screen min-h-screen p-4 pt-4 mx-auto">
      <Navbar />
      <div className="w-[90vw] md:w-[50vw] mx-auto">
        {alertMessage.show && (
          <div role="alert" className="mt-4 alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{alertMessage.message}</span>
          </div>
        )}
        <button onClick={() => navigate("/")} className="mt-3 btn">
          <ChevronLeft height={12} width={12} />
          Go Back
        </button>
        <h1 className="mt-2 text-xl font-bold text-center md:text-3xl">
          Empower Your Creative Journey With New StartUp Ideas
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full h-auto gap-3 mx-auto mt-3"
        >
          <div>
            <label htmlFor="idea">
              <b>Your Idea</b>
            </label>
            <textarea
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full textarea textarea-info md:h-[400px] resize-none mt-1"
              placeholder="Place Your Idea..."
              name="idea"
              minLength={10}
              value={formData.idea}
            ></textarea>
          </div>
          {!savedUser && (
            <div>
              <label className="flex justify-between" htmlFor="idea">
                <b>Your Username</b> <span>No Account Needed</span>
              </label>
              <textarea
                onChange={handleInputChange}
                required
                cols={1}
                rows={1}
                value={formData.username}
                className="w-full mt-1 resize-none textarea textarea-info"
                placeholder="@username"
                name="username"
                minLength={3}
              ></textarea>
            </div>
          )}
          <div>
            <button
              className="flex w-auto mx-auto space-x-3 md:w-full md:w btn-primary btn"
              type="submit"
              disabled={!formData.idea || !formData.username}
            >
              <span>Add Idea</span>
              <Send height={18} width={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewIdea