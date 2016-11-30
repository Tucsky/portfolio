<?php 
	$projects = array();

	$raw = preg_replace("/\t/", "", preg_replace("/\n/", "", file_get_contents('projects.json')));

	foreach (json_decode($raw) ?: array() as $index => $project) {
		if (!isset($project->name))
			continue;

		if (!isset($project->slug)) {
			$project->slug = iconv('utf-8', 'us-ascii//TRANSLIT', preg_replace('~[^\pL\d]+~u', '-', $project->name));
			$project->slug = strtolower(preg_replace('~-+~', '-', preg_replace('~[^-\w]+~', '', trim($project->slug))));
		}

		$project->screenshots = glob('img/portfolio/'.$project->slug.'/*.{jpg,png,gif,jpeg,webm,JPG,PNG,GIF,JPEG,WEBM}', GLOB_BRACE);
		$project->cover = glob('img/portfolio/'.$project->slug.'.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}', GLOB_BRACE);

		if (!count($project->screenshots) && !count($project->cover))
			continue;

		if (!count($project->cover))
			$project->cover = $project->screenshots[0];
		else
			$project->cover = $project->cover[0];

		if (!count($project->screenshots))
			$project->screenshots = [$project->cover];

		if (!isset($project->date))
			$project->date = date('Y');

		if (isset($project->url)) {
			$domain = str_ireplace('www.', '', parse_url($project->url, PHP_URL_HOST));
			$path = parse_url($project->url, PHP_URL_PATH);
			$project->_url = $domain.(mb_strlen(trim($path)) > 1 ? (mb_strlen($path) > 10 ? substr($path, 0, 10).'...' : $path) : '');
		}

		$project->active = isset($project->active) && $project->active;

		$projects[] = $project;
	}
?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Kevin Rostagni, freelance web developer based in Paris">
		<meta name="author" content="Kevin Rostagni">
		<meta name="title" content="Kevin Rostagni">
		<meta name="robots" content="index">
		<meta name="keywords" content="kevin rostagni, portfolio, web developer, freelance web developer, full stack developer">
		<meta name="Indentifier-URL" content="https://kevinrostagni.me">
		<meta name="theme-color" content="#e74c3c">
		<meta name="msapplication-navbutton-color" content="#e74c3c">
		<meta name="apple-mobile-web-app-status-bar-style" content="#e74c3c">

		<title>Kevin Rostagni - Freelance developer</title>

		<meta name="DC.title" content="Kevin Rostagni">
		<meta name="DC.creator" content="Kevin Rostagni">
		<meta name="DC.subject" content="kevin rostagni, portfolio, web developer, freelance web developer, full stack developer">
		<meta name="DC.description" content="Kevin Rostagni, freelance web developer based in Paris">
		<meta name="DC.publisher" content="Kevin Rostagni">
		<meta name="DC.format" content="website">
		<meta name="DC.identifier" content="https://kevinrostagni.me">
		<meta name="DC.language" content="fr">
		<meta name="DC.coverage" content="World">
		<meta name="DC.rights" content="© Kevin Rostagni - 2016">

		<meta property="og:site_name" content="Kevin Rostagni">
		<meta property="og:title" content="Kevin Rostagni">
		<meta property="og:type" content="website">
		<meta property="og:locale" content="fr_FR">
		<meta property="og:url" content="https://kevinrostagni.me">
		<meta property="og:image" content="https://kevinrostagni.me/img/social.jpg">
		<meta property="og:description" content="Kevin Rostagni, freelance web developer based in Paris">

		<link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700|Roboto+Condensed:300,400,700" rel="stylesheet">
		<link href="app.min.css?t=<?php echo time(); ?>" rel="stylesheet">

		<meta name="theme-color" content="#e74c3c">

		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="screenshot-zoom"></div>
		<div id="motion">
			
		</div>
		<div id="top">
			<nav class="nav nav-inline">
				<a class="nav-link active" href="#whoiam">Who Am I ?</a>
				<a class="nav-link" href="#experiences">Experiences</a>
				<a class="nav-link" href="#portfolio">Portfolio</a>
				<a class="nav-link" href="#contact">Get In Touch!</a>
			</nav>
		</div>
		<div id="hi">
			<div class="container">
				<h1>Kevin<br>Rostagni</h1>
				<p class="text-primary">Full Stack Developer</p>
			</div>
		</div>
		<section id="whoiam">
			<div class="container">
				<h2>Who I Am ?</h2>
				<div class="row text-xs-center text-sm-left">
					<div class="col-xs-12 col-sm-8"><p>I'm an avid programmer from France, passinate about code, design, startup and technology. I like science, travelling and music.</p></div>
					<div class="col-xs-12 col-sm-8 offset-sm-4"><div class="strong">What I do ?</div><p>I craft websites since the age of 13, build mobile applications, manage servers, design innovative user interfaces / experiences, and will transform your ideas into a finished digital project.</p></div>
				</div>
				<p class="attention text-xs-center"><strong>Oh</strong> and I’m currently self-employed and available, so if you want to work with me or just say hello for no reason what so ever,<br><br>
					<a href="#contact" class="btn btn-outline-info"><i class="icon-chat"></i> Contact me :-)</a>
					<span class="text-dark">or</span>
					<a target="_blank" href="cv_kevinrostagni.pdf" class="btn btn-outline-danger"><i class="icon-cloud-download"></i> Download my CV</a>
				</p>
			</div>
		</section>
		<section id="experiences" class="section-odd">
			<div class="container">
				<h2>Experiences</h2>
				<p>Integer feugiat, mauris cursus consequat suscipit, eros felis volutpat turpis, vehicula viverra lacus metus vel nibh. Nunc varius odio id cursus vestibulum. Curabitur molestie elit turpis. Nunc elementum ut mauris sed vehicula.</p>
				<div id="timeline">
					<div class="timeline-block">
						<div class="timeline-img timeline-picture">
							<i class="icon-graduate-certificate"></i>
						</div>

						<div class="timeline-content">
							<span class="timeline-date">2015 - <i>present</i></span>
							<h3>Master in Digital Communication Manager</h3>
							<p>I am currently studying at the <a href="http://iim.fr">Internet and Multimedia Institute</a> in Paris, La Defense.</p>
							<ul>
								<li>E-marketing</li>
								<li>E-merchandising</li>
								<li>Viral marketing</li>
								<li>Big data & traffic optimisation</li>
								<li>Business development</li>
								<li>Digital entrepreneurship</li>
							</ul>
							<!--<a href="#0" class="btn btn-dark btn-tilt">Read more</a>-->
						</div>
					</div>

					<div class="timeline-block">
						<div class="timeline-img timeline-movie">
							<i class="icon-building"></i>
						</div>

						<div class="timeline-content">
							<span class="timeline-date">2015</span>
							<h3>Web developer at <a href="https://orangerine.com">Orangerine</a></h3>
							<p>Development & integration of the website dedicated to the Quebec Manufacturing Fund</p>
							<!--<a href="#0" class="btn btn-dark btn-tilt">Read more</a>-->
						</div>
					</div>
					<div class="timeline-block" style="display:none;"></div>
					<div class="timeline-block">
						<div class="timeline-img timeline-movie">
							<i class="icon-building"></i>
						</div>

						<div class="timeline-content">
							<span class="timeline-date">2015</span>
							<h3>Web developer at <a href="http://hypractif.ca">Hypractif</a></h3>
							<p>Development of a free-sharing art website (mostly backend w/ Laravel), web-design & integration of several showcase websites and prototyped a shopify e-commerce website</p>
							<!--<a href="#0" class="btn btn-dark btn-tilt">Read more</a>-->
						</div>
					</div>

					<div class="timeline-block">
						<div class="timeline-img timeline-picture">
							<i class="icon-graduate-certificate"></i>
						</div>

						<div class="timeline-content">
							<span class="timeline-date">2013 - 2015</span>
							<h3>Bachelor in Digital Project Manager</h3>
							<p>After obtaining my high school degree I started studiying at the <a href="http://iim.fr">Internet and Multimedia Institute</a> in Paris, La Defense</p>
							<ul>
								<li>Web Development</li>
								<li>UI & UX design</li>
								<li>Mobile development</li>
								<li>Digital project management</li>
								<li>Team-leading</li>
							</ul>
							<!--<a href="#0" class="btn btn-dark btn-tilt">Read more</a>-->
						</div>
					</div>

					<div class="timeline-block">
						<div class="timeline-img timeline-movie">
							<i class="icon-building"></i>
						</div>

						<div class="timeline-content">
							<span class="timeline-date">2014</span>
							<h3>Web developer at <a href="#">B4BLUE</a></h3>
							<p>Upgrade of 2 intranet billing softwares (w/ Symfony2 & CodeIgniter) + collaborative development with a foreign team</p>
						</div>
					</div>

					<div class="timeline-block">
						<div class="timeline-img timeline-picture">
							<i class="icon-graduate-certificate"></i>
						</div>

						<div class="timeline-content">
							<span class="timeline-date">Jan 24</span>
							<h3>A LEVEL</h3>
							<p>Science and Technologies of Management</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="portfolio">
			<div class="container">
				<h2>My works</h2>
				<div class="row grid">
					<div class="grid-sizer col-xs-12 col-sm-6 col-lg-4 col-xl-3"></div>
					<?php foreach ($projects as $project): ?>
						<div class="grid-item col-xs-12 <?php echo (isset($project->cols) ? $project->cols : 'col-md-6 col-lg-4 col-xl-3').(isset($project->classes) ? ' '.$project->classes : ''); ?>">
							<div class="<?php echo isset($project->ratio) ? $project->ratio : 'four-three' ?>">
								<div class="project">
									<a data-dialog="<?php echo $project->slug; ?>" href="#" class="project-thumbnail">
										<div style="background-image:url('<?php echo $project->cover; ?>');"></div>
									</a>
									<a data-dialog="<?php echo $project->slug; ?>" href="#" class="btn btn-outline-white project-title"><?php echo $project->name; ?></a>
									<span class="project-date"><?php echo $project->date.($project->active ? '+ <i class="icon-bolt text-danger" data-toggle="tooltip" title="Active"></i>' : ''); ?></span>
								</div>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</section>

		<?php foreach ($projects as $project): ?>
		<div id="<?php echo $project->slug; ?>" class="dialog project">
			<div class="dialog-overlay"></div>
			<div class="dialog-content content-borderless">
				<div class="dialog-toggle" data-dialog-close></div>
				<?php if (count($project->screenshots)): ?>
					<div class="screenshots">
						<?php foreach ($project->screenshots as $screenshot): ?>
							<?php if (($extension = pathinfo($screenshot, PATHINFO_EXTENSION)) && strtolower($extension) == 'webm'): ?>
								<div>
									<video width="320" height="240" controls>
										<source src="<?php echo $screenshot; ?>" type="video/webm">
										Your browser does not support the video tag.
									</video>
								</div>
							<?php else: ?>
								<div data-flickity-bg-lazyload="<?php echo implode('/', array_map('rawurlencode', explode('/', $screenshot))); ?>">
									<?php if (preg_match('/\((.*)\)/', $screenshot, $match) && count($match) > 1): ?>
										<p><span><?php echo $match[1]; ?></span></p>	
									<?php endif; ?>
								</div>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<div class="dialog-padding">
					<div class="row">
						<div class="col-xs-12 col-sm-9 project-left">
							<h2><?php echo $project->name; ?></h2>
							<?php if (isset($project->description)):
								if (file_exists($project->slug.'.project.php')):
									include $project->slug.'.project.php';
								else: ?>
								<p><?php echo nl2br($project->description); ?></p>
								<?php if (isset($project->url)): ?>
									<a target="_blank" href="<?php echo $project->url; ?>" class="btn btn-sm btn-dark"><i class="icon-link"></i> <?php echo $project->_url; ?></a>
								<?php endif; ?>
							<?php endif; 
							endif; ?>
						</div>
						<div class="col-xs-12 col-sm-3 text-xs-left text-sm-right project-right">
							<ul class="meta">
								<?php if (isset($project->url)): ?>
									<li><a target="_blank" href="<?php echo $project->url; ?>"><?php echo $project->_url; ?> <i class="icon-link"></i></a></li>
								<?php endif; ?>
							</ul>
							<?php if ($project->tags): ?>
								<div class="tags">
									<?php foreach ($project->tags as $tag): 
										?><button class="btn btn-sm btn-primary btn-tilt"><?php echo $tag; ?></button><?php 
									endforeach; ?>
								</div>
							<?php endif; ?>
							</div>
					</div>
				</div>
			</div>
		</div>
		<?php endforeach; ?>

		<section id="contact">
			<div class="container">
				<h2>Contact me</h2>
				<p>I'm always <strong>interested</strong> in new projects, feel free to e-mail me at <a href="mailto:contact@kevinrostagni.me">contact@kevinrostagni.me</a> and i'll get back to your inquiry ASAP!</p>
				<ul class="social">
					<li><a target="_blank" class="social-ma btn" href="mailto:contact@kevinrostagni.me" data-toggle="tooltip" title="contact@kevinrostagni.me">
						<i class="icon-at"></i>
					</a></li>
					<li><a target="_blank" class="social-lk btn" href="https://www.linkedin.com/in/kevinrostagni" data-toggle="tooltip" title="Kevin Rostagni">
						<i class="icon-linkedin"></i>
					</a></li>
					<li><a target="_blank" class="social-tw btn" href="https://twitter.com/Tucsky" data-toggle="tooltip" title="Tucsky">
						<i class="icon-twitter"></i>
					</a></li>
				</ul>
			</div>
		</section>

		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<filter id="glitch">
				    <feFlood flood-color="#f4f4f4" result="white" />
				    <feFlood flood-color="blue" result="flood1" />
				    <feFlood flood-color="yellow" result="flood2" />
					<feOffset in="SourceGraphic" dx="5" dy="0" result="off1a"/>
					<feOffset in="SourceGraphic" dx="2" dy="0" result="off1b"/>
					<feOffset in="SourceGraphic" dx="-5" dy="0" result="off2a"/>
					<feOffset in="SourceGraphic" dx="-2" dy="0" result="off2b"/>
				    <feComposite in="flood1" in2="off1a" operator="in"  result="comp1" />
				    <feComposite in="flood2" in2="off2a" operator="in" result="comp2" />

		 		  	<feMerge x="0" width="200%" result="merge1">
						<feMergeNode in="white" />
						<feMergeNode in="comp1" />
						<feMergeNode in="off1b" />

						<animate attributeName="y" id="y" dur="4s" repeatCount="indefinite"
				    		values="104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px; 105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px"
				    		keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1" />
		 
						<animate attributeName="height" id="h" dur="4s" repeatCount="indefinite"
				    		values="10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px"
				    		keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1" />
				    </feMerge>

		 			<feMerge x="0" width="200%" y="60px" height="65px" result="merge2">
						<feMergeNode in="white" />
						<feMergeNode in="comp2" />
						<feMergeNode in="off2b" />

						<animate attributeName="y" id="y" dur="4s" repeatCount="indefinite"
				    		values="103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px; 66px; 88px; 42px; 13px; 100px; 100px; 104px;" 
				    		keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1" />
		 
						<animate attributeName="height" id="h" dur="3s" repeatCount="indefinite"
							values="0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px; 0px; 0px; 10px" keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 1" />
				    </feMerge>
					
				 	<feMerge>
		 				<feMergeNode in="SourceGraphic" />	
						<feMergeNode in="merge1" /> 
			 			<feMergeNode in="merge2" />
					</feMerge>
				</filter>
			</defs>
		</svg>

		<!--<script src="https://use.fontawesome.com/2325cfb746.js"></script>-->
		<script src="app.min.js?t=<?php echo time(); ?>"></script>
	</body>
</html>