// Copyright (c) 2025 DeanLJ. All rights reserved.
// SPDX-License-Identifier: MIT

(function() {
    'use strict';
    const nav = document.getElementById('m-subnav');
    if (!nav) return;

    nav.style.display = 'none';

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'h') {
            nav.style.display = nav.style.display === 'none' ? '' : 'none';
        }
    });
})();
