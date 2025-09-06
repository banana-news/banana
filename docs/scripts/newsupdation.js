let storyIndex = 0;

        document.getElementById('compileButton').addEventListener('click', compileNews);

        function compileNews() {
            // Get input elements and their values
            const contentInput = document.getElementById("contentInput");
            const titleInput = document.getElementById("titleInput");
            const contentValue = contentInput.value.trim();
            const titleValue = titleInput.value.trim();

            // Simple validation to ensure content exists
            if (!contentValue || !titleValue) {
                alert('Please enter a title and content.');
                return;
            }

            // Split the content into an array of words
            const contentArray = contentValue.split(" ");
            const contentArrayLength = contentArray.length;
            const halfLength = contentArrayLength / 2;

            // Get the middle value to split the content
            const middleValue = Math.floor(halfLength);

            // Construct the HTML for the news story
            let fullContentHtml = "";
            let shortContentHtml = "";
            
            // Loop to get the first half of the content
            for (let i = 0; i < middleValue; i++) {
                shortContentHtml += contentArray[i] + " ";
            }

            // Loop to get the second half of the content
            for (let i = middleValue; i < contentArrayLength; i++) {
                fullContentHtml += contentArray[i] + " ";
            }
            
            // Increment the index for the next story
            storyIndex++;

            // Create the full HTML structure with a toggle button
            const newsHtml = `<code>
                <div class="news-story bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">${titleValue}</h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        ${shortContentHtml}
                        <span id="full-story-${storyIndex}" class="hidden-content">
                            ${fullContentHtml}
                        </span>
                        <button 
                            class="read-more-btn text-blue-600 font-bold hover:underline focus:outline-none"
                            data-target="full-story-${storyIndex}"
                        >
                            READ MORE
                        </button>
                    </p>
                </div>
                </code>
            `;
            
            // Append the new story to the output container
            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML += newsHtml;

            // Add the event listener for the new "READ MORE" button
            const lastBtn = outputDiv.querySelector(`.read-more-btn[data-target="full-story-${storyIndex}"]`);
            if (lastBtn) {
                lastBtn.addEventListener('click', function(event) {
                    const targetId = event.target.getAttribute('data-target');
                    const fullStory = document.getElementById(targetId);
                    
                    if (fullStory) {
                        const isHidden = fullStory.classList.contains('hidden-content');
                        if (isHidden) {
                            fullStory.classList.remove('hidden-content');
                            fullStory.classList.add('visible-content');
                            event.target.textContent = 'READ LESS';
                        } else {
                            fullStory.classList.remove('visible-content');
                            fullStory.classList.add('hidden-content');
                            event.target.textContent = 'READ MORE';
                        }
                    }
                });
            }
            
            // Reset input fields
            contentInput.value = '';
            titleInput.value = '';
        }

        // Helper function for custom alert
        function alert(message) {
            // A simple modal-like alert using the DOM instead of the built-in alert()
            const existingAlert = document.getElementById('custom-alert');
            if (existingAlert) existingAlert.remove();

            const alertDiv = document.createElement('div');
            alertDiv.id = 'custom-alert';
            alertDiv.className = 'fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50';
            alertDiv.innerHTML = `
                <div class="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm">
                    <p class="text-lg mb-4">${message}</p>
                    <button class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200" onclick="document.getElementById('custom-alert').remove()">
                        OK
                    </button>
                </div>
            `;
            document.body.appendChild(alertDiv);
        }