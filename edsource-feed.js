// Fetch latest stories from EdSource author page
async function fetchLatestStories() {
    const container = document.getElementById('latest-stories-container');
    
    try {
        // Use a CORS proxy to fetch the RSS feed
        const response = await fetch('https://edsource.org/author/egallegos/feed/');
        const text = await response.text();
        
        // Parse the RSS feed
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        
        // Get the items
        const items = xmlDoc.querySelectorAll('item');
        
        // Limit to 4 stories
        const latestItems = Array.from(items).slice(0, 4);
        
        // Clear loading text
        container.innerHTML = '';
        
        // Create story cards
        latestItems.forEach((item, index) => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const pubDate = item.querySelector('pubDate').textContent;
            const description = item.querySelector('description')?.textContent || '';
            
            // Format date
            const date = new Date(pubDate);
            const formattedDate = date.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
            });
            
            // Create story card HTML
            const storyCard = document.createElement('article');
            storyCard.className = 'latest-story';
            storyCard.style.animationDelay = `${index * 0.1}s`;
            
            storyCard.innerHTML = `
                <h3 class="latest-story-title">
                    <a href="${link}" target="_blank" rel="noopener">${title}</a>
                </h3>
                <span class="latest-story-date">${formattedDate}</span>
            `;
            
            container.appendChild(storyCard);
        });
        
    } catch (error) {
        console.error('Error fetching stories:', error);
        container.innerHTML = `
            <div class="error-message">
                <p>Unable to load latest stories. Visit <a href="https://edsource.org/author/egallegos" target="_blank" rel="noopener">EdSource</a> to see recent work.</p>
            </div>
        `;
    }
}

// Load stories when page loads
if (document.getElementById('latest-stories-container')) {
    fetchLatestStories();
}
