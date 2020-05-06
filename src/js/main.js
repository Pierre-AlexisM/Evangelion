document.addEventListener("DOMContentLoaded", function(){
	
	// Model qui permet de récupérer la data
	class Model {

		constructor() {
			this.data = [
				{
					title: 'Homepage',
					url: '/',
					background: 'red',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
				},
				{
					title: 'Personnages',
					url: '/personnages',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
                },
                {
					title: 'Evangelions',
					url: '/evangelions',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
                },
                {
					title: 'Anges',
					url: '/anges',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
                },
                {
					title: 'World',
					url: '/world',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
                },
                {
					title: 'Shinji Ikari',
					url: '/personnages/shinji',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
                },
                {
					title: 'Rei Ayanami',
					url: '/personnages/rei',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
                },
                {
					title: 'Asuka Langley Soryu',
					url: '/personnages/asuka',
					background: 'green',
                    public: true,
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur temporibus sequi aliquid. Ipsa, sapiente expedita. Inventore dolore at quidem, aperiam porro, nobis beatae quo molestiae possimus magnam deserunt quasi'
				}
			]
		}

		getPageByUrl(url) {
			return this.data.find(page => page.url === url)
		}
	}

	// View qui permet de modifier le template html
	class View {
		constructor() {
			this.container = document.querySelector('.container')
		}

		changeBackground(option) {
			this.container.style.background = option.background
		}

		changeTitle(option) {
			this.container.innerHTML = option.title
		}
	}

	// Controller qui permet de gérer l'ensemble de l'application
	function controller() {
		const currentUrl = '/personnages/shinji'
		const data = new Model()

		const currentPage = data.getPageByUrl(currentUrl)

		const render = new View()
		render.changeBackground(currentPage)
		render.changeTitle(currentPage)
	}

	controller()

})