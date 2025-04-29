document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const addCourseBtn = document.getElementById("add-course-btn");
    const coursesContainer = document.getElementById("courses-container");
  
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        alert("Please fill in all required fields.");
        return;
      }
  
      const imageInput = document.getElementById("image");
      const file = imageInput.files[0];
  
      if (file) {
        const fileType = file.type;
        if (fileType !== "image/png" && fileType !== "image/jpeg") {
          alert("Only PNG and JPG images are allowed.");
          e.preventDefault();
          return;
        }
      }
  
      e.preventDefault();
  
      const formData = new FormData(form);
      let summary = "<h3>Submitted Information:</h3><ul>";
  
      formData.forEach((value, key) => {
        summary += `<li><strong>${key}:</strong> ${value}</li>`;
      });
  
      const courseInputs = coursesContainer.querySelectorAll("input");
      courseInputs.forEach((input, i) => {
        summary += `<li><strong>Course ${i + 1}:</strong> ${input.value}</li>`;
      });
  
      summary += "</ul><br><a href='' id='reset-link'>Reset</a>";
      form.innerHTML = summary;
  
      document.getElementById("reset-link").addEventListener("click", (e) => {
        e.preventDefault();
        location.reload();
      });
    });
  
    form.addEventListener("reset", () => {
      coursesContainer.innerHTML = "";
    });
  
    addCourseBtn.addEventListener("click", () => {
      const courseWrapper = document.createElement("div");
      courseWrapper.classList.add("course-entry");
  
      const courseInput = document.createElement("input");
      courseInput.type = "text";
      courseInput.name = "course";
      courseInput.placeholder = "Enter a course";
      courseInput.required = true;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        courseWrapper.remove();
      });
  
      courseWrapper.appendChild(courseInput);
      courseWrapper.appendChild(deleteBtn);
      coursesContainer.appendChild(courseWrapper);
    });
  });
  