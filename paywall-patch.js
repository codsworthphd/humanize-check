// Add this to the analyze() function - BEFORE the actual analysis runs

// FREE TIER LIMITS
const FREE_WORD_LIMIT = 1500;
const FREE_DAILY_CHECKS = 5;

function checkLimits() {
    const words = text.split(/\s+/).length;
    
    // Word limit check
    if (words > FREE_WORD_LIMIT) {
        showUpgradeModal('word-limit');
        return false;
    }
    
    // Daily usage check
    const today = new Date().toDateString();
    const usage = JSON.parse(localStorage.getItem('clearpen_usage') || '{}');
    
    if (!usage[today]) usage[today] = 0;
    
    // Clean old dates
    Object.keys(usage).forEach(date => {
        if (date !== today) delete usage[date];
    });
    
    if (usage[today] >= FREE_DAILY_CHECKS) {
        showUpgradeModal('daily-limit');
        return false;
    }
    
    // Increment usage
    usage[today]++;
    localStorage.setItem('clearpen_usage', JSON.stringify(usage));
    
    return true;
}

function showUpgradeModal(reason) {
    const messages = {
        'word-limit': `
            <h3 class="font-serif text-2xl font-700 text-cream-50 mb-4">Text too long for free tier</h3>
            <p class="text-cream-200/70 mb-6">Free users can analyze up to 1,500 words. Your text has ${text.split(/\s+/).length} words.</p>
            <p class="text-cream-200/70 mb-8">Upgrade to Pro for unlimited text length, one-click humanization, and more.</p>
        `,
        'daily-limit': `
            <h3 class="font-serif text-2xl font-700 text-cream-50 mb-4">Daily limit reached</h3>
            <p class="text-cream-200/70 mb-6">Free users get 5 checks per day. You've used all yours!</p>
            <p class="text-cream-200/70 mb-8">Upgrade to Pro for unlimited daily checks, advanced features, and more.</p>
        `
    };
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center z-50 px-6';
    modal.innerHTML = `
        <div class="bg-charcoal-800 border border-charcoal-600 rounded-lg p-8 max-w-md w-full">
            ${messages[reason]}
            <button onclick="openPricingModal(); this.closest('div.fixed').remove()" class="w-full px-6 py-3 bg-amber-500 text-charcoal-900 font-700 rounded hover:bg-amber-600 transition-colors mb-3">
                View Pro Plans
            </button>
            <button onclick="this.closest('div.fixed').remove()" class="w-full px-6 py-3 bg-charcoal-700 text-cream-200 font-600 rounded hover:bg-charcoal-600 transition-colors">
                Maybe Later
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}
