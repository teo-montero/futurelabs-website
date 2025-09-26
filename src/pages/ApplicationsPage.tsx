import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, Building, User, GraduationCap, Upload, Globe, FileText, CheckCircle } from 'lucide-react';

export function ApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    yearOfStudy: '',
    major: '',
    cv: null as File | null,
    linkedIn: '',
    github: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleInputChange('cv', file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="bg-white border border-gray-200 shadow-lg max-w-lg w-full text-center animate-scale-in">
          <CardContent className="pt-8 pb-8">
            <CheckCircle className="w-16 h-16 text-futurelabs-blue mx-auto mb-6" />
            <h1 className="gradient-text-primary mb-4">Application Submitted!</h1>
            <p className="text-gray-700 mb-6">
              Thank you for your interest in joining FutureLabs Advisory. We'll review your application and get back to you within 5-7 business days.
            </p>
            <p className="text-futurelabs-blue text-sm">
              Keep an eye on your email for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Building className="h-4 w-4 text-[#4a6cff]" />
              <span className="text-sm text-white/90">For Organisations</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Amplify Your Impact with</span>
              <span className="block bg-gradient-to-r from-[#4a6cff] via-[#7c4dff] to-[#4a6cff] bg-clip-text text-transparent">
                Pro Bono
              </span>
              <span className="block">Digital Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform your organization's digital capabilities with custom solutions 
              designed specifically for nonprofits, delivered at no cost.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <Card className="bg-white border border-gray-200 shadow-lg rounded-3xl">
              <CardHeader className="text-center">
                <CardTitle className="gradient-text-primary mb-2 text-3xl font-bold">Student Application</CardTitle>
                <CardDescription className="text-gray-700">
                  Tell us about yourself and why you want to join FutureLabs Advisory
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-5 h-5 text-gray-800" />
                      <h3 className="text-gray-900">Personal Information</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-800">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-800">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-800">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="your.email@university.edu"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-800">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="+44 7XXX XXXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-5 h-5 text-gray-800" />
                      <h3 className="text-gray-900">Academic Information</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="university" className="text-gray-800">University *</Label>
                      <Input
                        id="university"
                        value={formData.university}
                        onChange={(e) => handleInputChange('university', e.target.value)}
                        className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                        placeholder="e.g., University of Oxford, Imperial College London"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="yearOfStudy" className="text-gray-800">Year of Study *</Label>
                        <Select onValueChange={(value:string) => handleInputChange('yearOfStudy', value)}>
                          <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 data-[state=open]:bg-white">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st">1st Year</SelectItem>
                            <SelectItem value="2nd">2nd Year</SelectItem>
                            <SelectItem value="3rd">3rd Year</SelectItem>
                            <SelectItem value="4th">4th Year</SelectItem>
                            <SelectItem value="masters">Master's</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="major" className="text-gray-800">Major/Course *</Label>
                        <Input
                          id="major"
                          value={formData.major}
                          onChange={(e) => handleInputChange('major', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="e.g., Computer Science, Business"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Upload className="w-5 h-5 text-gray-800" />
                      <h3 className="text-gray-900">CV Upload</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cv" className="text-gray-800">Upload your CV *</Label>
                      <div className="relative">
                        <input
                          id="cv"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('cv')?.click()}
                          className="w-full bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200 border-2 border-dashed h-20 flex flex-col items-center justify-center gap-2"
                        >
                          <Upload className="w-6 h-6 text-futurelabs-blue" />
                          <span className="text-sm text-gray-700">
                            {formData.cv ? formData.cv.name : 'Click to upload your CV (PDF, DOC, DOCX)'}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-gray-800" />
                      <h3 className="text-gray-900">Links</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-gray-800">
                      <div className="space-y-2">
                        <Label htmlFor="linkedIn" className="text-gray-800">LinkedIn Profile</Label>
                        <Input
                          id="linkedIn"
                          type="url"
                          value={formData.linkedIn}
                          onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="https://linkedin.com/in/yourname"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github" className="text-gray-800">GitHub Profile</Label>
                        <Input
                          id="github"
                          type="url"
                          value={formData.github}
                          onChange={(e) => handleInputChange('github', e.target.value)}
                          className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white"
                          placeholder="https://github.com/yourusername"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-gray-900" />
                      <h3 className="text-gray-900">Additional Information</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo" className="text-gray-800">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-600 focus:border-futurelabs-blue focus:ring-futurelabs-blue/20 focus:bg-white min-h-[150px]"
                        placeholder="Share your motivation for joining FutureLabs, any additional links (portfolio, projects), skills not covered in your CV, or anything else you'd like us to know..."
                      />
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked:boolean) => handleInputChange('agreeToTerms', checked as boolean)}
                      className="border-gray-300 data-[state=checked]:bg-futurelabs-blue data-[state=checked]:border-futurelabs-blue"
                    />
                    <Label htmlFor="terms" className="text-gray-800 text-sm leading-5">
                      I agree to the terms and conditions and understand that FutureLabs Advisory will process my personal data in accordance with their privacy policy. I consent to being contacted about my application. *
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={!formData.agreeToTerms || !formData.firstName || !formData.lastName || !formData.email || !formData.university || !formData.yearOfStudy || !formData.major || !formData.cv}
                      className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] w-full group"
                    >
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}